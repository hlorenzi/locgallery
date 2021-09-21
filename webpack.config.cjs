const path = require("path")


module.exports =
{
    mode: "production",
	entry:
    {
		index: path.resolve(__dirname, "src", "index.tsx"),
    },
    
    output:
    {
        filename: "[name].js",
        path: path.resolve(__dirname, "pages"),
        publicPath: "/pages/"
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