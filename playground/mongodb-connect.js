//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('connect error'); 
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something vierd to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) return console.log('Insert error', err);
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	// Insert nev doc into Users (name, age, location)

/*	db.collection('Users').insertOne({
		name: 'Lars Frederiksen',
		age: 51,
		location: 'Hvidovre'
	}, (err, result) => {
		if (err) return console.log('Insert error', err);
		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/

	db.close();
});