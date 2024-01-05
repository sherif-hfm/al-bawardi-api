const express=require('express');
const {body}=require('express-validator');
const router=express.Router();
const rptController=require('../controllers/reports');
const authController=require('../controllers/auth');

//router.get('/monthlyReport/:year',authController.isAuth,rptController.monthlyReport);
router.get('/monthlyReport/:year',rptController.monthlyReport);


module.exports=router;