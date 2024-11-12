const express = require('express');
const app = express();
const main = require('./routes/main.js') ;
const adminroute = require('./routes/admin.js')
const cors = require('cors');
const Mongoose = require('mongoose') ;
const session = require('express-session') ;
 const  MongoSessionConnect = require('connect-mongodb-session')
 const csruf = require('csurf')
 const cookieParser = require('cookie-parser');
const authroutes = require('./routes/auth.js') ;
const User = require('./models/user.js')

const MongoUri = 'mongodb+srv://Ishan:MongoDB%406077@cluster0.thxtfon.mongodb.net/Environomics_Project?retryWrites=true&w=majority&tls=true' ;
const Mongostore = MongoSessionConnect(session);
const store = new Mongostore({
    uri : MongoUri,
    collection:'sessions' 
})

app.use(cors({
    origin: 'https://IshanIITBBS.github.io/SDG_Website', // Only allowed origin
    credentials: true,               // Allow credentials (cookies, sessions)
  }));


app.use(cookieParser());
const csrfProtection = csruf({cookie:true}) ;

app.use(session({secret:'my secret',resave:false,saveUninitialized:false,store:store}));
app.use(csrfProtection) ;



app.use(express.json());  
app.use(express.urlencoded({ extended: false }));



app.get('/csrf-token',  (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
  });


app.use((req,res,next)=>{
    if(!req.session.loggedIn)
      {
              next();
              return ;
      }
  User.findById(req.session.user._id)
  .then(user=>{
     req.user = user ;
     next();
  })
  .catch(err=>{
      console.log(err);
  })
})



app.use('/admin',adminroute)  ;
app.use(main);
app.use(authroutes) ;
Mongoose.connect(MongoUri)
.then(()=>{
    console.log('connected') ;
    app.listen(5000) ;
})
.catch(err=>{
    console.log(err) ;
})