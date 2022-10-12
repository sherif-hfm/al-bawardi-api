const codes={};
        codes['0'] = '\u0660'; //1632
        codes['1'] = '\u0661';
        codes['2'] = '\u0662';
        codes['3'] = '\u0663';
        codes['4'] = '\u0664';
        codes['5'] = '\u0665';
        codes['6'] = '\u0666';
        codes['7'] = '\u0667';
        codes['8'] = '\u0668';
        codes['9'] = '\u0669';
        codes['-'] = '-';
        codes[' '] = ' ';

module.exports=(enNum)=>{
        let arNum = '';
    for(let i=0;i < enNum.length;i++){
        if(codes[enNum.charAt(i)])
            arNum+=codes[enNum.charAt(i)];
        else
            arNum+=enNum.charAt(i);
    }
    return arNum;
};