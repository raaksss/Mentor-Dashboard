const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './client/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // Resolve configuration
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Module rules
  module: {
    rules: [
      {
        // Transpile JavaScript files using babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        // Handle CSS files (including Tailwind CSS)
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
      {
        // Handle image files
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },

  // Plugins configuration
  plugins: [
    // Generates an HTML file with <script> injected
    new HtmlWebpackPlugin({
      template: './client/public/index.html',
      favicon: './client/public/favicon.ico'
    }),
  ],

  // Development or production mode
  mode: 'development', // Change to 'production' for production build

  // Development server configuration (optional)
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 3000,
    historyApiFallback: true, // Handle React Router fallback
  },
};
