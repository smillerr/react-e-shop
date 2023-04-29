const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/* const CopyPlugin = require('copy-webpack-plugin') */
/* Optimization is not required in development */
/* const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin') */
const Dotenv = require('dotenv-webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]',
        publicPath: '/',
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname , 'src/assets/images/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
        }
    },
    module: {  
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic' //import react from react wont be needed anymore
                                }
                            ]
                            ]
                        }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'   // Needed in React
                }
            },
            {
                test: /\.s[ac]ss|.styl$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    /* 'stylus-loader' */
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'assets/images/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            /* inject: true,  this is not needed since html-loader does this */
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),
        /* new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets/images'),
                    to: "assets/images"
                }
            ]
        }), */
        new Dotenv(),
        // new BundleAnalyzerPlugin()
    ],
    /** optimization is not required in development */
    /* optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }  */
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        compress: true,
        port: 3006,
    }
}