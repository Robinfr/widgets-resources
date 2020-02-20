const merge = require("webpack-merge");
const baseConfig = require("@mendix/pluggable-widgets-tools/configs/webpack.config.dev.js"); //Can also be webpack.config.prod.js

const customConfig = {
    // Custom configuration goes here
    devtool: "source-map",
    externals: ["mendix"]
};
const previewConfig = {
    // Custom configuration goes here
    devtool: "inline-source-map"
};

const customConfigurations = [merge(baseConfig[0], customConfig), merge(baseConfig[1], previewConfig)];

if (baseConfig.length === 3) {
    customConfigurations.push(baseConfig[2]);
}

module.exports = customConfigurations;
