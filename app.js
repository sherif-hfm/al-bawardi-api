const path=require('path');
const express=require('express');
const helmet = require("helmet");
var cors = require('cors');
const nocache = require("nocache");
const bodyParser=require('body-parser');
const sequelize =require('./helpers/database')

const cookieParser = require('cookie-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

const funeralRoute=require('./routes/funeral');
const authRoute=require('./routes/auth');

const prayer = require('./models/prayer');
const user = require('./models/user');

const app=express();
app.use(nocache());
app.use(helmet());
app.use(cors(
  {origin: [
    process.env.CORS_ORGN
  ], credentials: true}
));

//app.use(bodyParser.urlencoded()); // for x-www-from-urlencoded

var sessionStore = new MySQLStore({
	host: process.env.MY_SQL_HOST,
	port: 3306,
	user: process.env.MY_SQL_USER,
	password: process.env.MY_SQL_PWD,
	database: process.env.MY_SQL_DB
});

app.use(session({
    secret: 'al-bawardi',
    name: 'ssid',
    cookie: {},
    resave: false,
    saveUninitialized: false ,
    store: sessionStore,
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
    //sequelize.sync();
    process.env.TZ = "Asia/Kuwait";
    console.warn('process.env');
	console.warn(process.env);
	  
    // console.log(process.env.TZ);
    
    console.log('Date:' + (new Date()).toString());
    if(process.env.NODE_ENV=='production'){
      var server = app.listen(process.env.PORT, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
     })
    }
    else{
      app.listen(process.env.PORT);
    }
    
  }).catch(err=>{
    console.log(err); 
  });
  
 

