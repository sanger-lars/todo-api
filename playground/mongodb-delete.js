//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('connect error'); 
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'køb mad'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: "Something new to do"}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });
	
/*	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5bbbe4c67d6c03bc306de09f")
	}).then((result) => {
		console.log(result);
	});

	db.collection('Users').deleteMany({
		name: "Jen"
	}).then((result) => {
		console.log(result);
	});*/

	//db.close();
});

