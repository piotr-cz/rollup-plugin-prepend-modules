import { Plugin } from 'rollup'

interface RollupPrependModulesOptions {
  /**
   * Modules to prepend
   */
  modules: string[];
  /**
   * Enable source maps
   */
  sourceMap?: boolean;

  /** @deprecated */
  sourcemap?: boolean;
}

export default function rollupPluginPrependModules(options: RollupPrependModulesOptions): Plugin
