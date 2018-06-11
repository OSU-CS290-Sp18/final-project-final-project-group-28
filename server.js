const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res, next) {
	res.status(200).render('index', {
		//todo
	})
});

app.use(express.static('public'));

app.get('*', function(req, res) {
	res.status(404).render('404');
});

app.listen(port);
