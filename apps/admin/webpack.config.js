const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.base.json')
);

module.exports = {
  output: {
    uniqueName: "admin",
    publicPath: "auto"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },      
  experiments: {
    outputModule: true
  },    
  plugins: [
    new ModuleFederationPlugin({

      library: { type: "module" },

      name: "admin",
      filename: "remoteEntry.js",
      exposes: {
          './Module': './apps/admin/src/app/app.module.ts',
      },        
      shared: share({
        "@angular/core": {
            singleton: true,
            strictVersion: true,
            requiredVersion: 'auto'
        },
        "@angular/common": {
            singleton: true,
            strictVersion: true,
            requiredVersion: 'auto'
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        ...sharedMappings.getDescriptors()
      })
    }),
    sharedMappings.getPlugin(),
  ],
};