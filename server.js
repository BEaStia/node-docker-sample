var webpack = require('webpack');
var pug = require('pug');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var app = new (require('express'))();
var port = 3000;
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
	filePath = path.join(__dirname, 'views', 'index.pug');
	view = pug.compileFile(filePath, {title: "Title!231"})();
	console.log(view);
	res.send(view);
});

app.listen(port, function(error) {
		if (error) {
			console.error (error)
		} else {
			console.info ("==> Listening on port %s. Open up http://localhost:%s/ in your bro wser.", port, port)
		}
	}
);