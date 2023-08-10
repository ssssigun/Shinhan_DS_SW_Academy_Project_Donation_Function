const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/db', {
      target: 'http://localhost:80',
      changeOrigin: true
    })
  )
  
  app.use(
    createProxyMiddleware('/generateToken', {
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  )
};
