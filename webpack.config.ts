/* eslint-disable node/no-unpublished-import */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: '#source-map',
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GitHub Note',
    }),
  ],
};

export default [config];
