const express = require('express');
const handlebars = require('express-handlebars');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('db.json');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const db = low(adapter).then(function(db){
	db.defaults({ "notes":[] }).write();

	app.get('/', function(req, res, next) {
		res.status(200).render('index', {
			//todo
		})
	});

	app.use(express.static('public'));

	app.get('*', function(req, res) {
		res.status(404).render('404');
	});

	app.listen(port, function() {
		console.log(`Server is listening on port ${port}.`);
	});
});
