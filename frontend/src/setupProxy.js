const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {

    app.use( '/api',
       createProxyMiddleware({
         target: 'http://13.209.144.115:3030',
         changeOrigin: true,
     })
);
};
