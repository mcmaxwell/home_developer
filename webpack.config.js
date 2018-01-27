const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './assets',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin('assets/style.css', {
       allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
          test: /\.(scss|sass)$/,
          use: extractSass.extract({
             use: [{
                 loader: "css-loader", options: {
                    sourceMap: true
                }
             },
             {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            browsers:['last 3 version']
                        })
                    ],
                    sourceMap: true
                }
            },
            {
              loader: 'resolve-url-loader'
            },
             {
                 loader: "sass-loader", options: {
                    sourceMap: true
                }
             }],
             // use style-loader in development
             fallback: "style-loader"
         })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/fonts/],
        use: [
          {
            loader: 'file-loader?name=./src/assets/img/[name].[ext]',
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        exclude: [/images/],
        use: [
          {
            loader: 'file-loader?name=./src/assets/fonts/[name].[ext]'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
