import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const externalDeps = Object.keys(pkg.dependencies);
const nodeDeps = ['path'];

export default {
  input: 'src/index.js',
  external: [...externalDeps, ...nodeDeps],
  output: [
    { file: pkg.main, format: 'cjs', exports: 'auto' },
    { file: pkg.module, format: 'es' }
  ]
};
