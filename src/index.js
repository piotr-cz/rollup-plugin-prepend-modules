import path from 'path';
import MagicString from 'magic-string';

/**
 * @typedef { import('../types/index.d.ts').default } RollupPluginPrependModules
 * @typedef { import('rollup').TransformResult } RollupPluginTransformResult
 */

/**
 * A rollup plugin which adds import modules to input entry
 * @type {RollupPluginPrependModules}
 */
export default function rollupPluginPrependModules(options = { modules: [], sourceMap: true }) {
  if (!options) {
    throw new Error('Missing options')
  }

  /** @type {boolean} */
  const sourceMap = options.sourceMap !== false && options.sourcemap !== false;

  /** @type {string[]} - Resolved input paths */
  const inputPaths = [];

  return {
    name: 'prepend-modules',

    buildStart(inputOptions) {
      // Read from array or object values
      const inputs = Array.isArray(inputOptions.input)
        ? inputOptions.input
        : Object.values(inputOptions.input);

      for (const input of inputs) {
        inputPaths.push(path.resolve(input));
      }
    },

    transform(code, id) {
      return inputPaths.includes(id)
        ? executePrepend(code)
        : null
    },
  }

  /**
   * Execute prepend
   * @param {string} code
   * @return {RollupPluginTransformResult}
   */
  function executePrepend(code) {
    const magicString = new MagicString(code);

    const imports = options.modules.map(prependModule =>
      `import '${prependModule}';`
    );

    const importBlock = imports.join('\n');

    magicString.prepend(`${importBlock}\n\n`);

    return {
      code: magicString.toString(),
      map: sourceMap ? magicString.generateMap({ hires: true }) : null,
    }
  }
}
