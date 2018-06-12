const express = require('express');
const handlebars = require('express-handlebars');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const adapter = new FileAsync('db.json');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());

const db = low(adapter).then(function(db){
	db.defaults({ "notes":[] }).write();

	app.get('/', function(req, res, next) {
		let dbArray = db.get('notes').value();
		res.status(200).render('body', {
			notes: dbArray
		})
	});

	app.post('/new', function(req, res) {
		db.get('notes').push({ "text": req.get("text"), "checked": false }).write();
		res.status(201).send("201 Created");
	});

	app.patch('/tick', function(req, res) {
		let edit = db.get('notes').find({ "text": req.get("text") });
		let val = edit.value();
		edit.assign({checked: req.get("checked")==="true"}).write();
		res.status(202).send("202 Accepted");
	});

	app.use(express.static('public'));

	app.get('*', function(req, res) {
		res.status(404).render('404');
	});

	app.listen(port, function() {
		console.log(`Server is listening on port ${port}.`);
	});
});
