const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  //백엔드 서버
  app.use(
    createProxyMiddleware('/db', {
      target: 'http://localhost:80',
      changeOrigin: true
    })
  )
  
  //인증 서버
  app.use(
    createProxyMiddleware('/generateToken', {
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  )
};
