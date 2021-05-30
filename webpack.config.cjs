const path = require("path")

module.exports =
{
    mode: "production",
	entry:
	{
		index: path.resolve(__dirname, "src/index.jsx"),
		theincredibles: path.resolve(__dirname, "src/theincredibles.jsx"),
		up: path.resolve(__dirname, "src/up.jsx"),
		frozen: path.resolve(__dirname, "src/frozen.jsx"),
		insideout: path.resolve(__dirname, "src/insideout.jsx"),
		zootopia: path.resolve(__dirname, "src/zootopia.jsx"),
		coco: path.resolve(__dirname, "src/coco.jsx"),
		incredibles2: path.resolve(__dirname, "src/incredibles2.jsx"),
		toystory4: path.resolve(__dirname, "src/toystory4.jsx"),
		onward: path.resolve(__dirname, "src/onward.jsx"),
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