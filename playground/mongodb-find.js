const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('592dd82cb933a155c03e9931')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log('Unable to fetch todos, err');
  // });

  db.collection('Todos').count().then( (count) => {
    console.log('Todos count', count);
  }, (err) => {
    console.log('Unable to fetch todos, err');
  });

  //  db.close();
});
