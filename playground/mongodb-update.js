//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('connect error'); 
	}
	console.log('Connected to MongoDB server');

	// findOneAndUpdate
/*	db.collection('Todos').findOneAndUpdate({
		text: 'Something new to do'
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});*/

	db.collection('Users').findOneAndUpdate({
		name: 'Lars Frederiksen'
	}, {
		$set: {
			name: 'Lars'
		},
		$inc: {
			age: 1
		} 
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});

