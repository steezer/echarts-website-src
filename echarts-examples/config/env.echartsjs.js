const path = require('path');
const config = require('./common');

Object.assign(config, {
    host: '/examples',

    cdnPayRootMap: {
        zh: '/examples',
        en: '/examples',
    },

    mainSiteCDNPayRootMap: {
        zh: '/',
        en: '/',
    },

    mainSiteHost: '',
    blogPath: 'http://efe.baidu.com/tags/ECharts/',
    releaseDestDir: path.resolve(__dirname, '../../echarts-www/release/examples')
});

module.exports = config;
