const mongoose = require('mongoose') 

const Schema = mongoose.Schema ;

const quiz = new Schema({
    question: {
        type: String,
        required: true,
      },
      options: {
         a:{type: String,
            required: true,},
         b:{type: String,
            required: true,},
         c:{type: String,
            required: true,},
         d:{type: String,
            required: true,},
      },
      answer:{
        type: String,
        required: true,
      }

})
 

module.exports = mongoose.model('quiz', quiz);
