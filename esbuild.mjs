import { build } from 'esbuild'
import globals from 'esbuild-plugin-globals'
import { glob } from 'glob'

/** @type {import('esbuild').BuildOptions} */
const OPTIONS = {
  logLevel: 'info',
  minify: true
}

/**
 * ESM
 */
build({
  ...OPTIONS,
  entryPoints: await glob('./src/**/*.{ts,tsx}'),
  format: 'esm',
  outdir: 'dist',
  packages: 'external',
  platform: 'neutral'
}).catch(() => process.exit(1))

/**
 * IIFE
 */
build({
  ...OPTIONS,
  bundle: true,
  entryPoints: ['src/index.ts'],
  format: 'iife',
  globalName: 'AracnaIconsFeatherReact',
  outfile: 'dist/index.iife.js',
  platform: 'browser',
  plugins: [globals({ react: 'React' })],
  treeShaking: true
}).catch(() => process.exit(1))

/**
 * ELEMENTS
 */
for (let element of await glob('./src/components/**/*.tsx')) {
  /**
   * CJS
   */
  build({
    ...OPTIONS,
    bundle: true,
    entryPoints: [element],
    format: 'cjs',
    outfile: element.replace('src', 'dist').replace('.tsx', '.cjs.js'),
    platform: 'browser',
    treeShaking: true
  }).catch(() => process.exit(1))
}
