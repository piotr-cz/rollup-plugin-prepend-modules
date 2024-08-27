import { readFileSync } from 'node:fs';
import { builtinModules } from 'module';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.js',
  external: Object.keys(pkg.dependencies)
    .concat(Object.keys(pkg.peerDependencies))
    .concat(builtinModules),
  output: [
    { format: 'esm', file: pkg.module },
    { format: 'cjs', file: pkg.main },
  ],
};
