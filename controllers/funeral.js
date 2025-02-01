const {body, validationResult}=require('express-validator');
const { QueryTypes,Op  } = require('sequelize');
const moment=require('moment');

const sequelize =require('../helpers/database');
const Funeral=require('../models/funeral');
const arabNum=require('../helpers/arabicNums');
const umalqura=require('../helpers/umalquraCalendar');
const Prayer=require('../models/prayer');
const PurialPlace=require('../models/burial-place');
const Sex=require('../models/sex');

exports.getTodayFuneral=(req,res,next)=>{
    let sql=`SELECT prayerId,prayers.prayerName,
    COUNT(CASE WHEN funerals.sexId = 'M' THEN 0 END) AS 'M',
    COUNT(CASE WHEN funerals.sexId = 'F' THEN 0 END) AS 'F',
    COUNT(CASE WHEN funerals.sexId = 'B' THEN 0 END) AS 'B',
    COUNT(CASE WHEN funerals.sexId = 'G' THEN 0 END) AS 'G',
    COUNT(*) AS 'Total'
    FROM  funerals,prayers
    where
    DATE=$1
    and funerals.prayerId=prayers.id
    GROUP BY funerals.prayerId,prayers.prayerName;`
    console.log(arabNum(moment().format('YYYY-MM-DD')));
    console.log(umalqura.gregorianToUmAlQura(new Date()));
    sequelize.query(sql,
    {
        bind: [moment().format('YYYY-MM-DD')],
        //bind: [moment('2023-06-24','YYYY-MM-DD').format('YYYY-MM-DD')],
        type: QueryTypes.SELECT,
        raw: true
    }).then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.getTodayFuneral_old=(req,res,next)=>{
    let sql="CALL getFuneral($1);"
    console.log(arabNum(moment().format('YYYY-MM-DD')));
    console.log(umalqura.gregorianToUmAlQura(new Date()));
    sequelize.query(sql,
    {
        bind: [moment().format('YYYY-MM-DD')],
        //bind: [moment('2022-05-09','YYYY-MM-DD').format('YYYY-MM-DD')],
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

exports.getStatistics=async (req,res,next)=>{
    //
    const today= await Funeral.count({col: 'id',distinct: false,where: { date: { [Op.gte]: moment(), [Op.lte]:moment() }} });
    const yesterday= await Funeral.count({col: 'id',distinct: false,where: { date: { [Op.gte]: moment().add(-1, 'days'), [Op.lte]:moment().add(-1, 'days') }} });
    const last7Days= await Funeral.count({col: 'id',distinct: false,where: { date: { [Op.gte]: moment().add(-7, 'days'), [Op.lte]:moment() }}});
    const lastMonth= await Funeral.count({col: 'id',distinct: false,where: { date: { [Op.gte]: moment().add(-30, 'days'), [Op.lte]:moment() }}});
    const now=new Date()
    const crDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const crYearFirstDay = new Date(now.getFullYear(), 0, 1);
    const diffDays = Math.ceil((crDate - crYearFirstDay) / (1000 * 60 * 60 * 24));
    const crDateHijiry=umalqura.getCurrentDate(); 
    const crHijiryYearFirstDayStr='01/01/' + crDateHijiry.year
    const  crHijiryYearFirstDay=umalqura.umAlQuraToGregorian(crHijiryYearFirstDayStr);
    const diffDaysHijiry = Math.ceil((crDate - crHijiryYearFirstDay) / (1000 * 60 * 60 * 24));
    const lastYear= await Funeral.count({col: 'id',distinct: false,where: { date: { [Op.gte]: crYearFirstDay, [Op.lte]:now }}});
    const lastYearHijiry= await Funeral.count({col: 'id',distinct: false,where: { date: { [Op.gte]: crHijiryYearFirstDay, [Op.lte]:now }}});
    res.status(200).json({
        today:today,
        yesterday:yesterday,
        last7Days:last7Days,
        lastMonth:lastMonth,
        diffDays:diffDays,
        diffDaysHijiry:diffDaysHijiry,
        lastYear:lastYear,
        lastYearHijiry:lastYearHijiry
    });
};

exports.getDetails=(req,res,next)=>{
    console.log(moment().format('YYYY-MM-DD'));
    const qDate=req.params.date;
    Funeral.findAll({ where: { date: qDate },include: [Prayer,PurialPlace,Sex] }).then(result=>{
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

exports.getDayDetail=(req,res,next)=>{
    console.log(moment().format('YYYY-MM-DD'));
    const pId=req.params.pid;
    const date=req.params.date;
    Funeral.findAll({ where: { date: date,prayerId:pId }, include: [Prayer,PurialPlace,Sex] }).then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.getPrayer=(req,res,next)=>{
    console.log(moment().format('YYYY-MM-DD'));
    const pId=req.params.pid;
    const date=req.params.date;
    Prayer.findAll().then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.getSexs=(req,res,next)=>{
    console.log(moment().format('YYYY-MM-DD'));
    const pId=req.params.pid;
    const date=req.params.date;
    Sex.findAll().then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.getPlace=(req,res,next)=>{
    console.log(moment().format('YYYY-MM-DD'));
    const pId=req.params.pid;
    const date=req.params.date;
    PurialPlace.findAll().then(result=>{
        console.log(result);
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        res.status(500).json();
    });
};

exports.addFuneral=(req,res,next)=>{
    if(!validationResult(req).isEmpty()){
        res.status(400).json();
        return;
    }
    console.log(req.body);
    Funeral.create({
        deadName:req.body.deadName,
        date:moment(req.body.date, "YYYY-MM-DD"), //new Date(Date.parse(req.body.date)),
        sexId:req.body.sex,
        prayerId:req.body.prayerId,
        purialplaceId:req.body.placeId,
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
        sexId:req.body.sex,
        prayerId:req.body.prayerId,
        purialplaceId:req.body.placeId,
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