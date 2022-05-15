const {validationResult}=require('express-validator');
const { QueryTypes } = require('sequelize');
var bcrypt = require('bcryptjs');
const sequelize =require('../helpers/database');
const User=require('../models/user');
const settings=require('../models/settings')
const salt='$2a$10$NyscfdAAXUum1sqiUpNRiu';
exports.login=async (req,res,next)=>{
    try{
        const userLogin=req.body.userLogin;
        const password=req.body.password;
         const result= await User.findOne({ where: { loginName: userLogin } });
         console.log(result);
         if(result){
            if(bcrypt.compareSync(password,result.password)){
                req.session.isAuth=true;
                await req.session.save();
                res.status(200).json();
            }
            else{
                req.session.destroy();
                res.status(401).json();         
            }
         }
         else{
            req.session.destroy();
            res.status(401).json();     
         }
    }
    catch(err){
        console.log(err);
        res.status(500).json();
    }
   
     //res.cookie('isAuth','true', { maxAge: 900000, httpOnly: true });
    // res.cookie('isAuth','true', { maxAge: 900000, httpOnly: true });
    //res.status(200).json({message:'ok',date:new Date().toLocaleString()});
};

exports.sginup=async (req,res,next)=>{
    try{
        // const salt=bcrypt.genSaltSync(10);
        // console.log(salt);
        const salt= await bcrypt.genSalt(10);
        const userLogin=req.body.userLogin;
        const password=bcrypt.hashSync(req.body.password, salt);
        const result=await User.create({
            loginName:userLogin,
            password:password
        });
        res.status(200).json();
    }
    catch(err){
        console.log(err);
        res.status(500).json();
    }
};

exports.logout=async (req,res,next)=>{
    //await req.session.destroy();
    res.status(200).json();
}

exports.isAuth=async (req,res,next)=>{
    if(req.session.isAuth)
        next();
    else
        res.status(401).json();
}