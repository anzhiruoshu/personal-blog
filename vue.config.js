module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/jisuapi': {
                target: 'https://way.jd.com/',
                changeOrigin: true,
                ws: true,
            },
        }
    }
}