const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
    return console.log('Error connecting to mongodb TodoApp');
  }
  // db.collection('Todos').find({_id:new ObjectID('5a43cf67c90cc531b889d7d3')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Error fetching Todos collection');
  // });
  db.collection('Todos').find().count().then((count)=>{
    console.log(`Count of Todos is ${count}`);
  }).catch((err)=>{
    console.log('Error in getting the count');
  });
  var name = 'Jen';
  db.collection('Users').find({name}).toArray().then((docs)=>{
    console.log(`Users with name - ${name}`);
    console.log(JSON.stringify(docs,null,2))
  },(err)=>{
    console.log(`Error fetching users with name ${name}`);
  })
})
