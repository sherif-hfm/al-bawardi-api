const {validationResult}=require('express-validator');
const { QueryTypes } = require('sequelize');
const moment=require('moment');

const sequelize =require('../helpers/database');
const Funeral=require('../models/funeral');
const arabNum=require('../helpers/arabicNums');
const umalqura=require('../helpers/umalquraCalendar');

exports.getTodayFuneral=(req,res,next)=>{
    let sql="CALL `al-bawardi`.`getFuneral`($1);"
    console.log(arabNum(moment().format('YYYY-MM-DD')));
    console.log(umalqura.gregorianToUmAlQura(new Date()));
    sequelize.query(sql,
    {
        //bind: [moment().format('YYYY-MM-DD')],
        bind: [moment('2022-05-09','YYYY-MM-DD').format('YYYY-MM-DD')],
        type: QueryTypes.RAW,
        raw: true
    }).then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.getDetails=(req,res,next)=>{
    console.log(moment().format('YYYY-MM-DD'));
    const qDate=req.params.date;
    Funeral.findAll({ where: { date: qDate } }).then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.getDetail=(req,res,next)=>{
    console.log(moment().format('YYYY-MM-DD'));
    const qId=req.params.Id;
    Funeral.findByPk(qId).then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.addFuneral=(req,res,next)=>{
    console.log(req.body);
    Funeral.create({
        deadName:req.body.deadName,
        date:moment(req.body.date, "YYYY-MM-DD"), //new Date(Date.parse(req.body.date)),
        sex:req.body.sex,
        prayerId:req.body.prayerId,
    }).then(result=>{
        console.log(result);
        res.status(200).json();
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.updateFuneral=(req,res,next)=>{
    const funeral={
        id:req.body.id,
        deadName:req.body.deadName,
        date:moment(req.body.date, "YYYY-MM-DD"), //new Date(Date.parse(req.body.date)),
        sex:req.body.sex,
        prayerId:req.body.prayerId,
    };
    Funeral.update(funeral,{ where: { id: req.body.id } }).then(result=>{
        console.log(result);
        res.status(200).json();
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.deleteFuneral=(req,res,next)=>{
    console.log('deleteFuneral');
    const fId=req.params.Id;
    Funeral.destroy({ where: { id: fId } }).then(result=>{
        console.log(result);
        res.status(200).json();
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};