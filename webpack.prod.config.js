var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 


  output: {
    publicPath: '/',
    filename: "bundle.js",
    path: BUILD_DIR
  },
    
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: [ "babel-loader"]
      },
 
    ]
  },
  
  //debug, es6 to es5 mapping
  devtool: 'source-map',
 
  devServer: {
    contentBase: APP_DIR,
    compress: true,
    port: 8080,

    historyApiFallback: {
      index: 'index.html'
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js',
        minChunks:  function(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          warnings: false,
        },
        sourceMap: true
    }),

    new CopyWebpackPlugin(
      [
        {
          from: APP_DIR + '/assets',
          to: 'assets'
        },
        {
          from: APP_DIR + '/index.html',
          to: 'index.html'
        }
      ]
    )

  ]

};

module.exports = config;