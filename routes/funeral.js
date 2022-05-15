const express=require('express');
const {body}=require('express-validator');
const router=express.Router();
const funeralController=require('../controllers/funeral');
const authController=require('../controllers/auth');

router.get('/',funeralController.getTodayFuneral);
router.get('/getDetails/:date',authController.isAuth,funeralController.getDetails);
router.get('/getDetail/:Id',authController.isAuth,funeralController.getDetail);
router.post('/add',authController.isAuth,funeralController.addFuneral);
router.post('/update',authController.isAuth,funeralController.updateFuneral);
router.delete('/del/:Id',authController.isAuth,funeralController.deleteFuneral);

// router.post('/addFeed',[body('title').isLength({min:5}),body('email').isEmail()],feedController.addFeed);

// router.get('/post/:postId', feedController.getPost);

module.exports=router;