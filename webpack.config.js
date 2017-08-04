var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./client/styles/main.scss'],
  output: {
    filename: './client/bundle.js'
  },
  module: {

    rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader','postcss-loader','sass-loader']
            })
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './client/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
