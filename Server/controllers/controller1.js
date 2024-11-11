const Notice = require('../models/notice') ;
const Mission = require('../models/mission') ;
const mission = require('../models/mission');
const Quiz = require('../models/quiz') ;

exports.main_intro = (req,res,next)=>{
   res.send('Hello welcome to the SDG website') ;
}

exports.getnotices  = (req,res,next)=>{
    Notice.find()
    .then(notices=>{
       return res.send(notices) ;
    })
}


exports.getMissions  = (req,res,next)=>{ 
   Mission.find().select('title _id status')
   .then(missions=>{
      return res.send(missions) ;
   })
}

exports.getMissionDetail = (req, res, next) => {
   const missionId = req.params.missionId ;
   Mission.findById(missionId)
     .then(mission => {
        return res.send(mission) ;
     })
     .catch(err => console.log(err));
 }

 exports.getquiz =(req,res,next)=>{
   Quiz.find()
   .then(quizzes=> {
      return res.send(quizzes) ;
   })
   .catch(err=>{
      console.log(err) ;
   })
  
 }