//Разработать свой модуль + зависимости
//модуль автокалькулятор аналог http://vseazs.com/

var clc = require('cli-color');//интеграция стороннего модуля изменения видны в файле package.json
var fs=require('fs');

var CalcNafta=function(price_litr){
        this.price_litr = price_litr;//цена за 1л

};

/*
Справка
amount//количество топлива
cost//к-во литров на 100км
price_litr//цена за 1л
 */


CalcNafta.prototype.roundTwoDecimal = function(amt){
    return Math.round(amt*100)/100;
};

//Узнаем максимальную дистанцию
CalcNafta.prototype.distance=function(amount,cost){

    return clc.yellow(this.roundTwoDecimal((amount/cost)*100));
};

//Общая стоимость топлива
CalcNafta.prototype.maxcost=function(amount){

    return clc.red(this.roundTwoDecimal(amount*this.price_litr));
};

//Цена 1км пути

CalcNafta.prototype.onekm=function(price, distance){

    return clc.green(this.roundTwoDecimal(price/distance));
};

//експорт в файл
CalcNafta.prototype.totxt = function(){
    return fs.appendFileSync('myazs.txt', text + '\n', 'utf8');
};


module.exports=CalcNafta;//експорт