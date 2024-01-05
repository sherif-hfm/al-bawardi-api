var mysql = require('mysql2');
//////////////////
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
const rptRoute=require('./routes/reports');

const prayer = require('./models/prayer');
const user = require('./models/user');

const app=express();

app.get("/test", function (req, res) {
  res.send("NodeJS app running : " + (new Date()).toString());
});

app.get("/testdb", function (req, res) {
  sequelize.authenticate().then(result=>{
    res.send("sequelize ok : " + (new Date()).toString());
    
  }).catch(err=>{
    res.send("sequelize error : " + (new Date()).toString() + err);
    console.error(err); 
  });  
});

app.get("/testdb2", function (req, res) {
  var con = mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PWD,
    database: process.env.MY_SQL_DB
  });  
  con.connect(function(err) {
    if (err) 
      res.send("mysql error : " + (new Date()).toString() + err);
    else
      res.send("Connected!");
  });  
});

app.use(nocache());
app.use(helmet());
app.use(cors(
  {
    origin: [process.env.CORS_ORGN.split(',')],
    credentials: true
}
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
app.use('/reports',rptRoute);


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
    console.log('sequelize OK');  
    
  }).catch(err=>{
    console.error('sequelize error');
    console.error(err); 
  });

  if(process.env.NODE_ENV=='production'){
    var server = app.listen(process.env.PORT, function () {
      var host = server.address().address
      var port = server.address().port
      process.env.TZ = "Asia/Kuwait";
      console.warn('process.env');
      console.warn(process.env);      
      // console.log(process.env.TZ);      
      console.log("Example app listening at http://%s:%s", host, port)
   })
  }
  else{
    app.listen(process.env.PORT);
  }

 
  

 

