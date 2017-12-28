const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
    return console.log('Error connecting to mongodb- TodoApp');
  }
  // db.collection('Todos').deleteMany({text:'Lunch'}).then((res)=>{
  //   console.log(res);
  // })
  // db.collection('Todos').deleteOne({text:'Lunch'}).then((res)=>{
  //   console.log(res);
  // })
  // db.collection('Todos').findOneAndDelete({complete:true}).then((res)=>{
  //   console.log(res);
  // })
  var name = 'Kiran Srinivasa'
  db.collection('Users').deleteMany({name}).then((res)=>{
    console.log(res);
  })
  db.collection('Users').findOneAndDelete({_id:new ObjectID('5a43d0d6726b9d2c2cc8fbfe')}).then((res)=>{
    console.log(res);
  })
})
