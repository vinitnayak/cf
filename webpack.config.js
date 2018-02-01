var express = require('express')
var webpack = require('webpack');
var path = require('path');
var exit = require('exit');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');
const port = 8080



var config ={
	entry: [	
		APP_DIR + '/cf_index.js' // Your appʼs entry point
	],
  output: {
    filename: 'cf_bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
  
   plugins: [
    new CleanWebpackPlugin(['dist/*.*', 'dist/res', 'dist/src']),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
    { from: './index.html', to: '../dist/index.html' },
    { from: './manifest.json', to: '../dist/manifest.json' },
    { from: './cf.json', to: '../dist/cf.json' },
      {
            context: './res',
            from: '**/*',
            to: '../dist/res'
      }
    ])
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

var app = express()
app.use('/', express.static(BUILD_DIR))
app.listen(port)

module.exports = config;

