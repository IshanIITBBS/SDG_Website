const Notice = require('../models/notice.js') ;
const Mission = require('../models/mission.js') ;
const Quiz = require('../models/quiz.js') ;

exports.getnoticeform = (req,res,next)=>{
    if(user.isadmin != true)
    {
        return res.send({"status":"Only Admin can Post Notice"}) ;
    }
    
}

exports.postnotice = (req,res,next)=>{
  const title = req.body.title;
  const description = req.body.description;
  const dateposted = req.body.date ;
  const notice = new Notice({
    title:title,
    description:description,
    Date_posted:dateposted
  }) ;
  notice.save()
  .then(result=>{
    res.send({"status":"Notice Posted"}) ;
  })
  .catch(err=>{
    console.log(err) ;
  })
}

exports.postmission = (req,res,next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageurl = req.body.imageurl;
    const status = req.body.status ;

    const mission = new Mission({
      title:title,
      description:description,
       imageurl:imageurl,
       status:status
    }) ;
    mission.save()
    .then(result=>{
      res.send({"status":"Mission added"}) ;
    })
    .catch(err=>{
      console.log(err) ;
    })
  }

  exports.postquiz =(req,res,next)=>{
    const question = req.body.question;
    const options = { 
      a:req.body.optionA ,
      b:req.body.optionB,
      c:req.body.optionC ,
      d:req.body.optionD,
    }
    const answer = req.body.answer ;

    const quiz = new Quiz({
      question:question,
      options:options,
      answer:answer
    }) ;
    quiz.save()
    .then(result=>{
      res.send({"status":"Quiz added"}) ;
    })
    .catch(err=>{
      console.log(err) ;
    })
  }
