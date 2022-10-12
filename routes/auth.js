const express=require('express');
const {body}=require('express-validator');
const router=express.Router();
const authController=require('../controllers/auth');

router.get('/env',authController.env);
router.post('/login',authController.login);
router.post('/sginup',authController.sginup);
router.post('/setpwd',authController.setPassword);
router.get('/logout',authController.logout);
router.get('/isAdmin',authController.isAdmin);


module.exports=router;