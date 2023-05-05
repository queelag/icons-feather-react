import { writeFile } from 'fs/promises'
import { glob } from 'glob'
import PACKAGE from '../package.json' assert { type: 'json' }

PACKAGE.exports = {
  '.': {
    import: './index.js',
    require: {
      default: './index.cjs.js',
      types: './index.d.ts'
    }
  }
}

for (let path of await glob('src/components/**/*.ts')) {
  let name

  name = path.replace('src/components/', '').replace('.ts', '')

  PACKAGE.exports[`./components/${name}.js`] = {
    import: `./components/${name}.js`,
    require: {
      default: `./components/${name}.cjs.js`,
      types: `./components/${name}.d.ts`
    }
  }
}

await writeFile('package.json', JSON.stringify(PACKAGE, null, 2))
