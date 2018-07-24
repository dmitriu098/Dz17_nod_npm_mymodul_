//модуль конвертирование валют
//функция-конструктор


var Converter=function(baseCurrencyBuy,baseCurrencySale){
	this.baseCurrencyBuy=baseCurrencyBuy;
    this.baseCurrencySale=baseCurrencySale;

};

 Converter.prototype.roundTwoDecimal = function(amount){
	return Math.round(amount*100)/100;
};


Converter.prototype.convertToUA = function(currency){
	return this.roundTwoDecimal(currency*this.baseCurrencyBuy);
};
Converter.prototype.convertTo = function(currency){
	return this.roundTwoDecimal(currency/this.baseCurrencySale);
};

//разница между курсами
Converter.prototype.diff = function(){
    return this.roundTwoDecimal(this.baseCurrencySale-this.baseCurrencyBuy);
};

module.exports=Converter;//експорт




