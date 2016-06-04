var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');

var app = module.exports = loopback();

app.start = function() {
  
  // start the web server
  return app.listen(function() {
    var baseUrl = app.get('url').replace(/\/$/, '');
    var explorerPath;
    
    app.emit('started');
    
    console.log('Web server listening at: %s', baseUrl);
    
    if (process.env.NODE_ENV !== 'production' && 
      app.get('loopback-component-explorer')) {
        
      explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
    
    mountAngular();
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
  

function mountAngular() {
  const staticPath = path.resolve(__dirname, '../client/dist/');
  
  app.use(loopback.static(staticPath));

  // any other routes:
  app.use('/*', function(req, res, next) {
    
    if (req.originalUrl.includes('api')) {
      return next();
    } 
    if (req.originalUrl.includes('js.map')) {
      return next();
    }
    
    res.sendFile(staticPath + '/index.html');
  });
}