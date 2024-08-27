declare module '@piotr-cz/rollup-plugin-prepend-modules' {

  import { Plugin } from 'rollup'

  export interface Options {
    /**
     * Modules to prepend
     */
    modules: string[]
    /**
     * Enable source maps
     */
    sourceMap?: boolean
  }

  export default function rollupPluginPrependModules(options: Options): Plugin
}
