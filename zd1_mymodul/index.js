///
var CalcNafta = require('./mymodul');

var price_litr=25.5;
var calc = new CalcNafta(price_litr);

console.log('Дистанция, км\n(Где arg1-- количество топлива,arg2--К-во литров на 100км)\n'+ ' ' +calc.distance(30,5)+ ' ' + 'км');
console.log('Цена топлива составит\n'+ ' ' +calc.maxcost(30)+' '+ 'грн');
console.log('Цена 1 км пути составит:\nВведите общую цену топлива и расстояние\n' + calc.onekm(738.5,500)+ 'грн/км');

//console.log(calc.totxt(calc.distance(30,5)));

