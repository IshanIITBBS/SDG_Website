const mongoose = require('mongoose') 

const Schema = mongoose.Schema ;

const notice = new Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String, 
      },
      Date_posted:{
        type: String,
       required: true,
      }

})
 

module.exports = mongoose.model('notice', notice);