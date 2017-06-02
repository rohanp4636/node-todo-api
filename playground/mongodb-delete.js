const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to MongoDB server');

    //delete Many
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //find one and delete
    db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
      console.log(result);
    });
  //  db.close();
});
