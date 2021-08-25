module.exports = function (config) {
    config.output.publicPath = '/';
    config.node.process = 'mock';
    config.node.Buffer = true;
    config.module.rules.push({
        test: /\.pdf$/,
        loader: 'file-loader',
        options: { name() { return 'pdf/[name].[ext]' } }
    })
}