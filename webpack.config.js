/**
 * Created by brsmith on 7/3/17.
 */
const path = require('path')
const webpack =  require('webpack')
var WebpackStrip = require('webpack-strip')
const WebpackAssetsManifest = require('webpack-assets-manifest')



module.exports = {
    mode: 'development', 
    context: __dirname + '/src',

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new WebpackAssetsManifest({
            output: '../public/asset-manifest.json',
            merge: true
          })
    ],

    entry: {
        javascript: './index.js'
       // html: '../public/index.html'
    },

    output: {
        filename: 'app.js',
        path: __dirname + '/public/js'
    },

    devServer: {
        contentBase: 'public'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.join(__dirname, "/src/"),
            "node_modules"
        ]
        /*alias: {
            //Narrator1: path.resolve('./src/story/narrator1.js'),
            Story1: path.resolve('./src/story/story1.js')
        }*/
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
              loader: 'babel-loader',
                options: {
                    presets: ["es2015", "stage-2", "stage-3", "react"],
                    plugins: ["transform-object-rest-spread"]
                },
            }],
        }, {
            test: /\.js$/,
            use: ['react-hot-loader/webpack'],
            include: path.resolve(__dirname, './src/')
      }
    ],

    }
}
