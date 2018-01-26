var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'cf');
var APP_DIR = path.resolve(__dirname, 'src');


var config ={
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		APP_DIR + '/compliancefactory_index.js' // Your appʼs entry point
	],
  output: {
    filename: 'compliancefactory_bundle.js',
    path: path.resolve(__dirname, 'cf'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
        
      },
      {
            test: /\.css$/,
            loader: 'style-loader'
      },
      {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
            }
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[path][name].[ext]'
              },
          },
       ]
      }
    ]
  },
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}'
  },
  resolve: {
        extensions: ['jsx', '.js','.css']
		
  },
  devtool:"source-map",
  devServer: {
        contentBase: './cf',
        hot: true,
        host:'localhost',
        port:'8080'
   },
   plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
    config.devtool = ""; // No sourcemap for production
  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}
module.exports = config;