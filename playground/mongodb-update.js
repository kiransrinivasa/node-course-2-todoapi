const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
    return console.log('Error connecting to DB - TodoApp');
  }
  db.collection('Todos').findOneAndUpdate({_id:new ObjectID("5a443697741dc60832a0008e")},
                                          {$set:{completed:true}},
                                          {returnOriginal:false}).then((res)=>{
                                             console.log(JSON.stringify(res,null,2));
                                          })
  db.collection('Users').findOneAndUpdate({_id:new ObjectID("5a43f8597b72570db8c3b6c3")},
                                          {$set:{name:'Kiran'},$inc:{age:1}},
                                          {returnOriginal:false}).then((res)=>{
                                            console.log(res);
                                          })
})
