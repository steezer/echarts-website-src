const path = require('path');
const config = require('./common');

config.host = '';

config.cdnPayRootMap = {
    // Expensive!!! use it carefully.
    // zh: 'https://echarts-www.cdn.bcebos.com', // origin: 'https://echarts-www.bj.bcebos.com'
    zh: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site',
    en: '/'
};
config.cdnFreeRootMap = {
    // 'echarts.cdn.apache.org' have been configured for zh (?)
    // zh: 'https://echarts.cdn.apache.org',
    zh: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site',
    en: '/'
};
config.galleryPath = 'https://www.echartsjs.com/gallery/';
config.blogPath = 'https://efe.baidu.com/tags/ECharts/';
config.releaseDestDir = path.resolve(__dirname, '../../echarts-website');

module.exports = config;
