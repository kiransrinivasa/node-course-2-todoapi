const mongoose = require('mongoose');

var User = mongoose.model("user",
                  {
                    name: {
                      type:String,
                      required:true,
                      minlength: 1,
                      trim:true
                    },
                    email: {
                      type:String,
                      required:true,
                      minlength: 5,
                      trim:true
                    },
                    age: {
                      type:Number,
                      required:true,
                      default:18
                    }
                  });
module.exports = {
  User
}
