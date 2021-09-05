const esbuild = require('esbuild')
const pkg = require('../package.json')

const commonProps = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  external: ['react'],
}

esbuild.build({
  ...commonProps,
  outfile: pkg.main,
  format: 'cjs',
})

esbuild.build({
  ...commonProps,
  outfile: pkg.module,
  format: 'esm',
})
