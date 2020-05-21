const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === 'production';

  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.s?css$/,
            use: CSSExtract.extract({
              use: [
                  // css-loader
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true
                  }
                },
                // sass-loader
                { 
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            })
              // // style-loader
              // { loader: 'style-loader' },
              // // css-loader
              // {
              //   loader: 'css-loader',
              //   options: {
              //     modules: true
              //   }
              // },
              // // sass-loader
              // { loader: 'sass-loader' }
            
          }
        ]
      },
    plugins: [
      CSSExtract
    ], 
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 9000,
      historyApiFallback: true //handling code via client side code
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    mode: 'none'
  }
}