const User = require('../models/user')
const bcrypt = require('bcryptjs')

exports.postsignup = (req,res,next)=>{

}

exports.postlogin = (req,res,next)=>{
    const email = req.body.email ;
    const password = req.body.password ;
    User.findOne({email:email})
    .then(user=>{
        if(!user)
            {
               return  req.session.save((err)=>{
                  res.send({"status":"invalid email or password"}) ;
               })            
            }
        
        return bcrypt.compare(password,user.password)
        .then(match=>{
          if(!match)
              {
                console.log(user.password);
                  return  req.session.save((err)=>{
                    res.send({"status":"invalid email or password"}) ;
                  })
              }
              req.session.loggedIn = true ;
              req.session.user = user ;
              req.session.save(err=>{           
                     if(err) {console.log(err) ;}
                     res.send({"status":"Login Successfull"});
                 }) ;
        })
})   

}

exports.postlogout =(req,res,next)=>{
    req.session.destroy((err)=>{
        if(err) {console.log(err) ;}
        res.send({"status":"Logged Out"}) ;
    })
}

exports.logincheck = (req,res,next)=>{
    if(!req.session.loggedIn)
        {
           return  res.send({"loggedIn":false})
        }
     return res.send({"loggedIn":true})
}

exports.admincheck = (req,res,next)=>{
    if(!req.user.isadmin)
        {
           return  res.send({"isadmin":false})
        }
        res.send({"isadmin":true})
}