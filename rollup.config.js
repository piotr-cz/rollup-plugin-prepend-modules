import fs from 'node:fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const externalDeps = Object.keys(pkg.dependencies);
const nodeDeps = ['path'];

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.js',
  external: [...externalDeps, ...nodeDeps],
  output: [
    { file: pkg.module, format: 'esm' },
    { file: pkg.main, format: 'cjs' },
  ],
};
