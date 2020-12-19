const path = require("path")

module.exports =
{
    mode: "production",
	entry:
	{
		index: path.resolve(__dirname, "src/index.jsx"),
		theincredibles: path.resolve(__dirname, "src/theincredibles.jsx"),
		up: path.resolve(__dirname, "src/up.jsx"),
		insideout: path.resolve(__dirname, "src/insideout.jsx"),
		zootopia: path.resolve(__dirname, "src/zootopia.jsx"),
		coco: path.resolve(__dirname, "src/coco.jsx"),
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