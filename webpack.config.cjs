const path = require("path")


module.exports =
{
    mode: "production",
	devtool: "source-map",
	entry:
    {
		index: path.resolve(__dirname, "src", "index.tsx"),
    },
    
    output:
    {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/"
    },

    resolve:
    {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    
    module:
    {
        rules:
        [
            {
                test: /\.(js|jsx|ts|tsx)$/,
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
                            ["@babel/preset-react", {}],
                            ["@babel/preset-typescript",
                            {
                                isTSX: true,
                                allExtensions: true,
                            }],
                        ]
                    }
                }
            }
        ]
    },
}