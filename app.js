const path=require('path');
const express=require('express');
var cors = require('cors')
const bodyParser=require('body-parser');
const sequelize =require('./helpers/database')

const cookieParser = require('cookie-parser');
var session = require('express-session');

const funeralRoute=require('./routes/funeral');
const authRoute=require('./routes/auth');

const prayer = require('./models/prayer');
const user = require('./models/user');

const app=express();
app.use(cors(
  {origin: [
    "http://localhost:4200"
  ], credentials: true}
));

//app.use(bodyParser.urlencoded()); // for x-www-from-urlencoded

app.use(session({
    secret: 'keyboard cat',
    name: 'ssid',
    cookie: {},
    resave: true,
    saveUninitialized: true     
  }));

  app.use(( req, res, next) => {
    //req.session.isAuth=true;
    //res.send();
    next();
  });

  
  

app.use(bodyParser.json());
app.use(cookieParser());


app.use('/funeral',funeralRoute);
app.use('/auth',authRoute);


// general error handling
app.use((error, req, res, next) => {
    console.log('general error handling');
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
  

  sequelize.authenticate().then(result=>{
    //sequelize.sync({force:true})
    sequelize.sync();
    process.env.TZ = "Asia/Kuwait";
    //console.log(process.env);
    // console.log(process.env.TZ);
    console.log('Date:' + (new Date()).toString());
    app.listen(3040);
  }).catch(err=>{
    console.log(err); 
  });
  
 

