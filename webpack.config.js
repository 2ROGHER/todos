const path = require('path');

module.exports = {
    /**
     * Entry point of the application.
     * This is where Webpack starts bundling the files.
     */
    entry: './src/index.ts',

    /**
     * Output configuration.
     * Specifies the directory and file name for the bundled output.
     */
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js', // Dynamic filename based on entry name
    },

    /**
     * Module rules to handle different file types.
     * Here, we define how Webpack processes specific file types using loaders.
     */
    module: {
        rules: [
            /**
             * CSS Loader
             * Processes `.css` files and bundles them into the output.
             */
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Added 'style-loader' to inject CSS into the DOM
            },

            /**
             * TypeScript Loader
             * Handles `.ts` files, excludes `node_modules`, and transpiles TypeScript to JavaScript.
             */
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },

            /**
             * Babel Loader for ES6+ and modern JavaScript.
             * Transpiles `.js`, `.mjs`, and `.cjs` files to support older browsers.
             */
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }] // Targets default browsers
                        ]
                    }
                }
            },

            /**
             * SASS Loader
             * Compiles `.scss` and `.sass` files into CSS and injects styles into the DOM.
             */
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // Injects styles into the DOM
                    //'css-loader',   // Turns CSS into JS modules
                    //'sass-loader',  // Compiles Sass to CSS
                    {
                        loader: 'css-loader', // Turns CSS into JS modules
                        options: { sourceMap: true }, // Enable CSS source maps
                    },
                    {
                        loader: 'sass-loader', // Compiles Sass to CSS
                        options: { sourceMap: true }, // Enable Sass source maps
                    },
                ],
            },

            /**
             * React and JSX Loader
             * Transpiles `.js` and `.jsx` files using Babel.
             */
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',    // For modern JavaScript
                            '@babel/preset-react'   // For React and JSX
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/, // Aplies to files with extensios such as .ts y .tsx
                exclude: /node_modules/,
                use: 'ts-loader', // Use ts-loader to TypeScript files
            },
        ],
    },

    /**
     * Resolve extensions
     * Enables importing files without specifying extensions.
     */
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Added '.ts' and 'tsx'  for TypeScript and TypeScript with JSX compatibilities
    },

    /**
     * Plugins
     * Add additional functionality or optimization to Webpack.
     */
    plugins: [
        // Example: Add plugins like HtmlWebpackPlugin here if needed
    ],

    /**
    * Dev Server
    * Configuration for Webpack's development server with live reload.
    */
    devServer: {
        static: path.resolve(__dirname, 'build'),
        compress: true,
        port: 8080,
        hot: true,
    },
};