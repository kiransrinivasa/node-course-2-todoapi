const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/config');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.listen(3000,()=>{
  console.log('Listening on port 3000');
})

app.post("/todos",(req,resp)=>{
  var newTodo = new Todo({text:req.body.text});
  newTodo.save(newTodo).then((doc)=>{
    resp.status(200).send(doc);
  },(e)=>{
    resp.status(400).send(e);
  })
})

//
// var ToDo = mongoose.model("Todo",
//                            {
//                              text:{
//                                type:String,
//                                required:true,
//                                minlength: 1,
//                                trim: true
//                              },
//                              completed:{
//                                type:Boolean,
//                                default:false
//                              },
//                              completedAt: {
//                                type:Number,
//                                default:null
//                              },
//                              email: {
//                                type:String,
//                                required:true,
//                                trim:true,
//                                minlength:5
//                              }
//                            }
//                          );
//
// var newToDo = new ToDo({text:'email test',email:'x@y.com'});
//  newToDo.save().then((res)=>{
//    console.log('Saved todo',res);
//  },(e)=> {
//    console.log('Unable to save ',e)
//  })
