const path = require('path');
const config = require('./common');

Object.assign(config, {
    host: '/examples',
    cdnPayRootMap: {
        // zh: 'https://echarts-www.cdn.bcebos.com/examples',
        zh: 'https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/examples',
        en: '/examples'
    },
    mainSiteCDNPayRootMap: {
        // zh: 'https://echarts-www.cdn.bcebos.com',
        zh: 'https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site',
        en: '/examples'
    },
    mainSiteHost: '',

    blogPath: 'http://efe.baidu.com/tags/ECharts/',
    releaseDestDir: path.resolve(__dirname, '../../incubator-echarts-website/examples')
});

module.exports = config;
