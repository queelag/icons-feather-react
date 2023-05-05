import { getPascalCaseString } from '@aracna/core'
import { appendFile, mkdir, rm, writeFile } from 'fs/promises'
import { glob } from 'glob'
import { format } from 'prettier'

await rm('src/components', { force: true, recursive: true })
await mkdir('src/components')
await writeFile('src/index.ts', '')

for (let path of await glob('node_modules/@aracna/icons-feather-web/elements/*-element.js')) {
  let name, pname, ts

  name = path.replace('node_modules/@aracna/icons-feather-web/elements/', '').replace('.js', '')
  pname = getPascalCaseString(name)

  ts = /* HTML */ `
    <script>
      import { createBaseElementComponent } from '@aracna/react'
      import type { ElementComponent, IconProps } from '@aracna/react'
      import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
      import { IconFeather${pname} } from '@aracna/icons-feather-web/elements/${name}.js'

      ${[
        `export const IconFeather${pname.replace('Element', '')}: `,
        `ElementComponent<IconFeather${pname}, IconProps> = createBaseElementComponent<IconFeather${pname}, IconElementAttributes, IconElementEventMap>`,
        `('icon-feather-${name.replace('-element', '')}', IconFeather${pname})`
      ].join('')}
    </script>
  `

  ts = format(ts.replace(/<\/?script>/gm, ''), {
    jsxSingleQuote: true,
    parser: 'babel-ts',
    printWidth: 160,
    semi: false,
    singleQuote: true,
    trailingComma: 'none'
  })

  await writeFile(`src/components/${name.replace('-element', '')}.tsx`, ts)
  await appendFile('src/index.ts', `export * from './components/${name.replace('-element', '')}.js'\n`)
}
