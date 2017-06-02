const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
      return console.log('Unable to connect to mongodb server.');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('592dd8775155d70834725a10')
    }, {
      $set: {name: 'Rohan Patel'},
      $inc: {age: 1}
    }, {
      returnOriginal: false
    }).then((result) => console.log(result));


  //  db.close();
});
