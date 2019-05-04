module.exports = function(api) {
    api.cache.using(() => process.env.NODE_ENV === "development");

    const presets = [ "@babel/preset-env", "@babel/preset-react" ];
    const plugins = [ "@babel/proposal-class-properties" ]

    return { presets, plugins }
};
