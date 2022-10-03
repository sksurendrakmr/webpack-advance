const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.[contenthash].js',
        path:path.resolve(__dirname,'dist'),
        // publicPath:path.resolve(__dirname,'dist')
        // publicPath:'http://some-cdn.com/'
        // clean:true //clear dist folder(ourput directory)
        clean:{
            dry:true, //webpack will tell you which files its going to remove instead of removing them.
            keep:/\.css/ //which file it should keep while clearing the output directory
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser:{
                    dataUrlCondition: {
                        maxSize: 3*1024
                    }
                }
            },
            {
                test: /\.(ttf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css?$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.scss?$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader ']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }

            }
        ]
    },
    plugins:[
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        // new CleanWebpackPlugin()
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPattern:[
        //         '**/*', //default config to remove the files from output directory i.e. dist(in our case)
        //         path.join(process.cwd(),'build/**/*') //it will remove the files from build folder which is outside the output directory
        //     ]
        // })
    ]
}