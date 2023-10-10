import { writeFile } from 'fs/promises'
import { glob } from 'glob'
import PACKAGE from '../package.json' assert { type: 'json' }

PACKAGE.exports = {}

for (let path of await glob('src/components/**/*.ts')) {
  let name

  name = path.replace('src/components/', '').replace('.ts', '')

  PACKAGE.exports[`./components/${name}.js`] = {
    import: `./components/${name}.js`,
    require: {
      default: `./components/${name}.cjs`,
      types: `./components/${name}.d.ts`
    }
  }
}

await writeFile('dist/package.json', JSON.stringify(PACKAGE, null, 2))
