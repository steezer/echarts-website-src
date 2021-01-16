const path = require('path');

module.exports = {
    galleryViewPath: '/examples/zh/view.html?c=',
    galleryEditorPath: '/examples/zh/editor.html?c=',
    websitePath: '/',

    imagePath: 'asset/img/',
    gl: {
        imagePath: 'asset/gl/img/',
    },

    releaseDestDir: path.resolve(__dirname, '../../incubator-echarts-website'),
    ecWWWGeneratedDir: path.resolve(__dirname, '../../echarts-www/_generated')
};
