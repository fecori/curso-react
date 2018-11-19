const withImages = require('next-images');
const withCss = require('@zeit/next-sass');

module.exports = withImages(withCss({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]_[hash:base64:5]",
    }
}));