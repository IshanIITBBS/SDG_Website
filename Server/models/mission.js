const mongoose = require('mongoose') 

const Schema = mongoose.Schema ;

const mission = new Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String, 
      },
      imageurl:{
        type: String,
       required: true,
      },
      status:{
        type: String,
        required: true,
      }

})
 

module.exports = mongoose.model('mission', mission);
