# rollup-plugin-prepend-modules

A Rollup plugin which adds import modules to input entry

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v14.15.0+) and Rollup v1.20.0+.

## Install

Using npm:

```console
npm install @piotr-cz/rollup-plugin-prepend-modules --save-dev
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import prependModules from '@piotr-cz/rollup-plugin-prepend-modules';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [
    process.env.NODE_ENV === 'development' && prependModules({
      modules: ['preact/debug'],
      sourceMap: true
    })
  ]
};
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

The configuration above will add `import 'preact/debug` input entry (`src/index.js` in this case).

## Options

### `modules`

type: `string[]`<br />
default: `[]`

An array of modules to prepend

### `sourceMap`

type: `boolean`<br />
default: `true`

If false, skips source map generation

## Meta

[LICENSE (MIT)](/LICENSE)
