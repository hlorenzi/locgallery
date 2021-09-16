const path = require("path")
const glob = require("glob")


module.exports =
{
    mode: "production",
	entry:
    {
		index: path.resolve(__dirname, "src/index.jsx"),
    },
    
    output:
    {
        filename: "[name].js",
        path: path.resolve(__dirname, "pages"),
        publicPath: "/pages/"
    },
    
    module:
    {
        rules:
        [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env",
                            {
                                targets: "Chrome > 79, Firefox > 76",
                                useBuiltIns: "usage",
                                corejs: 3,
                            }],
                            "@babel/preset-react"]
                    }
                }
            }
        ]
    },
}