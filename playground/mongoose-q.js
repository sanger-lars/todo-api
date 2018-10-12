// mongoose-q.js
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


User.findById('5bbd390263e301101482ae9d').then((user) => {
	if (!user) {
		return console.log('User not found.');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
	console.log(e);
});


/*var id = '55bc083b63eb0f85015c38b5b';

if (!ObjectID.isValid(id)) {
	console.log('ID is not vallid');
}
Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos:', todos);
	console.log('  ');
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo:', todo);
	console.log('  ');
});


Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log('Id not found.');
	}
	console.log('Todo by id:', todo);
}).catch((e) => {
	console.log(e);
});*/

