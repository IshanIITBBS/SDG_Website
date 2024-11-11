const mongoose = require('mongoose') 

const Schema = mongoose.Schema ;

const User = new Schema({
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
   isadmin:{
    type:Boolean,
    required:true 
   }

})

User.methods.addnotice = function(notice){
  
}


module.exports = mongoose.model('User',User) ;