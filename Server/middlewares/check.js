exports.logincheck = (req,res,next)=>{
    console.log(req.session.loggedIn) ;
    if(!req.session.loggedIn)
        {
           return  res.send({"loggedIn":false})
        }
        next() ;
}

exports.admincheck = (req,res,next)=>{
    if(!req.user.isadmin)
        {
           return  res.send({"admin":false})
        }
        next() ;
}