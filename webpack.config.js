const path = require('path')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        // publicPath:path.resolve(__dirname,'dist')
        // publicPath:'http://some-cdn.com/'
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
            }
        ]
    }
}