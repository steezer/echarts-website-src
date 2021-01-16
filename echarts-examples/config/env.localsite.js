const path = require('path');
const config = require('./common');

Object.assign(config, {

    host: '/examples',
    // host: 'http://localhost:8000/echarts/incubator-echarts-website/examples',

    cdnPayRootMap: {
        zh: '/examples',
        en: '/examples'
    },

    mainSiteCDNPayRootMap: {
        zh: '',
        // zh: 'http://127.0.0.1:8000/echarts/incubator-echarts-website',
        en: ''
    },

    mainSiteHost: '',
    // mainSiteHost: 'http://localhost:8000/echarts/incubator-echarts-website',

    blogPath: 'http://efe.baidu.com/tags/ECharts/',
    releaseDestDir: path.resolve(__dirname, '../../incubator-echarts-website/examples')
});

module.exports = config;
