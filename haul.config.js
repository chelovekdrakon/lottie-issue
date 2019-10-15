import RemoveStrict from 'remove-strict-webpack-plugin';
import {withPolyfills, makeConfig} from '@haul-bundler/preset-0.60';

export default makeConfig({
  bundles: {
    index: {
      entry: withPolyfills('./index'),
      transform({config}) {
        config.plugins.push(new RemoveStrict());
      },
    },
  },
});
