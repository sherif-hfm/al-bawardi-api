const {validationResult}=require('express-validator');
const { QueryTypes,Op } = require('sequelize');
var bcrypt = require('bcryptjs');
const sequelize =require('../helpers/database');
const User=require('../models/user');
const settings=require('../models/settings')
const salt='$2a$10$NyscfdAAXUum1sqiUpNRiu';

exports.env=async (req,res,next)=>{
    res.status(200).json(process.env);
};

exports.login=async (req,res,next)=>{
    try{
        const userLogin=req.body.userLogin;
        const password=req.body.password;
         const user= await User.findOne({ where: { loginName: userLogin,loginErrors:{[Op.lte] : 11},status:0 } });
         console.log(user);
         if(user){
            if(bcrypt.compareSync(password,user.password)){
                req.session.isAuth=true;
                const uuser={loginErrors:0};
                await User.update(uuser,{ where: { id: user.id } });
                await req.session.save();
                res.status(200).json();
            }
            else{
                const uuser={loginErrors:user.loginErrors+1};
                await User.update(uuser,{ where: { id: user.id } });
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
};

exports.sginup=async (req,res,next)=>{
    try{
        // const salt=bcrypt.genSaltSync(10);
        // console.log(salt);
        const salt= await bcrypt.genSalt(10);
        const userLogin=req.body.userLogin;
        const password=bcrypt.hashSync(req.body.password, salt);
        if(req.body.token=='P@ssw0rd'){
            const result=await User.create({
                loginName:userLogin,
                password:password,
                status:-1,
            });
            res.status(200).json();
        }
        else{
            res.status(401).json(); 
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json();
    }
};

exports.setPassword=async (req,res,next)=>{
    try{
        const userLogin=req.body.userLogin;
        const salt= await bcrypt.genSalt(10);
        const user={
            password:bcrypt.hashSync(req.body.password, salt)
        };
        if(req.body.token=='P@ssw0rd'){
            const result=await User.update(user,{ where: { loginName: userLogin } });
            res.status(200).json();
        }
        else{
            res.status(401).json(); 
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json();
    }
};

exports.logout=async (req,res,next)=>{
    await req.session.destroy();
    res.status(200).json();
}

exports.isAdmin=async (req,res,next)=>{
    if(req.session.isAuth)
    res.status(200).json(true);
    else
        res.status(401).json(false);
}

exports.isAuth=async (req,res,next)=>{
    if(req.session.isAuth)
        next();
    else
        res.status(401).json();
}