/* eslint-disable node/no-unpublished-import */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: '#source-map',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GitHub Note',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};

export default [config];
