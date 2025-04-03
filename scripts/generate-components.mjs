import { getPascalCaseString } from '@aracna/core'
import { mkdir, rm, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { basename, extname } from 'path'
import { format } from 'prettier'

await rm('src/components', { force: true, recursive: true })
await mkdir('src/components')

for (let path of await glob('node_modules/@aracna/icons-feather-web/elements/*-element.js')) {
  let name, pname, ts

  name = basename(path).replace(extname(path), '')
  pname = getPascalCaseString(name)

  ts = /* HTML */ `
    <script>
      import type { ElementComponent } from '@aracna/react'
      import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
      import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
      import { IconFeather${pname} } from '@aracna/icons-feather-web/elements/${name}'

      ${[
        `export const IconFeather${pname.replace('Element', '')}: `,
        `ElementComponent<IconFeather${pname}, AracnaIconProps> = createBaseElementComponent<IconFeather${pname}, AracnaIconElementAttributes, AracnaIconElementEventMap>`,
        `('icon-feather-${name.replace('-element', '')}', IconFeather${pname})`
      ].join('')}
    </script>
  `

  ts = await format(ts.replace(/<\/?script>/gm, ''), {
    jsxSingleQuote: true,
    parser: 'babel-ts',
    printWidth: 160,
    semi: false,
    singleQuote: true,
    trailingComma: 'none'
  })

  await writeFile(`src/components/${name.replace('-element', '')}.ts`, ts)
}
