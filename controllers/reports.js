const {validationResult}=require('express-validator');
const { QueryTypes,Op } = require('sequelize');
var bcrypt = require('bcryptjs');
const sequelize =require('../helpers/database');
const User=require('../models/user');
const settings=require('../models/settings')
const salt='$2a$10$NyscfdAAXUum1sqiUpNRiu';

exports.monthlyReport=async (req,res,next)=>{
    let sql=`SELECT
    YEAR(date) AS year,
    MONTH(date) AS month,
    CASE MONTH(date)
        WHEN 1 THEN 'يناير'
        WHEN 2 THEN 'فبراير'
        WHEN 3 THEN 'مارس'
        WHEN 4 THEN 'إبريل'
        WHEN 5 THEN 'مايو'
        WHEN 6 THEN 'يونيو'
        WHEN 7 THEN 'يوليو'
        WHEN 8 THEN 'أغسطس'
        WHEN 9 THEN 'سبتمبر'
        WHEN 10 THEN 'أكتوبر'
        WHEN 11 THEN 'نوفمبر'
        WHEN 12 THEN 'ديسمبر'
        ELSE ''
    END AS month,
    SUM(CASE WHEN sexId = 'B' THEN 1 ELSE 0 END) AS boy,
    SUM(CASE WHEN sexId = 'F' THEN 1 ELSE 0 END) AS woman,
    SUM(CASE WHEN sexId = 'G' THEN 1 ELSE 0 END) AS girl,
    SUM(CASE WHEN sexId = 'M' THEN 1 ELSE 0 END) AS man,
    COUNT(*) AS total
FROM
    funerals
WHERE
    YEAR(date) = $1
GROUP BY
    YEAR(date), MONTH(date)
ORDER BY
    year, month;`;
    const year=req.params.year;
    sequelize.query(sql,
        {
            //bind: [moment().format('YYYY-MM-DD')],
            bind: [year],
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