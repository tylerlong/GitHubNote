/* eslint-disable node/no-unpublished-import */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: '#source-map',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'docs'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GitHub Note',
    }),
  ],
};

export default [config];
