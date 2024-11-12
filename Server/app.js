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

// app.use(cors({
//     origin: 'https://n9qrkhsl-3000.inc1.devtunnels.ms', // Only allowed origin
//     // origin:'http://localhost:3001',
//     credentials: true,               // Allow credentials (cookies, sessions)
//   }));

  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://127.0.0.1:8000",
        "https://n9qrkhsl-3000.inc1.devtunnels.ms",
      ],
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
    })
  );
  
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", [
      //"https://n9qrkhsl-3000.inc1.devtunnels.ms",
       "http://localhost:3000",
    ]);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });


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