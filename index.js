function ResInjectPlugin(options) {
    this.options = options
}

ResInjectPlugin.prototype.apply = function(compiler) {
    var paths = this.options.paths;
    compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            for (var i = paths.length - 1; i >= 0; i--) {
                var path = paths[i];
                if(path.type=="js"){
                    htmlPluginData.assets.js.unshift(path.path);
                }else if(path.type=="css"){
                    htmlPluginData.assets.css.unshift(path.path);
                }
            }
            callback(null, htmlPluginData);
        });
    });
};

module.exports = ResInjectPlugin;
