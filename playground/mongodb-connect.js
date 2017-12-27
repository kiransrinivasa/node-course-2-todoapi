const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
    return console.log('Cannot connect to Mongo DB');
  }
  console.log('Connected to Mongo DB server');
  db.collection('Todos').insertOne({
    text:'Something to do',
    complete:false
  },(err,res)=> {
    if(err) {
      return console.log('Cannot create Todos collection');
    }
    console.log(JSON.stringify(res.ops,undefined,2));
  })

  db.collection('Users').insertOne({
    name:'Kiran Srinivasa',
    age:42,
    location:'07058'
  },(err,res)=>{
    if(err) {
      return console.log('Cannot add to users');
    }
    console.log('Added to Users\n');
    console.log(JSON.stringify(res.ops,null,2));
    console.log(res.ops[0]._id.getTimestamp());
  })
  db.close();
});
