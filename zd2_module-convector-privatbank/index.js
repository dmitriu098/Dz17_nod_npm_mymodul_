/*
 Добавить функциональность к модулю Converter. Сделать привязку к курсу api.pb.
 И усложнить по желанию.
 */
var Converter = require('./converter');
var request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
    if (!error && response.statusCode == 200) {

        var data=JSON.parse(body);

        //Выберем интересующую валюту
        var ccy ='eur';
        var baseCurrencyBuy=0;
        var baseCurrencySale=0;
            if(ccy=='USD'||ccy=='usd'){
                //USD

                baseCurrencyBuy =data[0].buy;
                 baseCurrencySale=data[0].sale;
            }else if(ccy=='EUR'||ccy=='eur') {
                //EUR

                baseCurrencyBuy = data[1].buy;
                baseCurrencySale = data[1].sale;
            }else if(ccy=='RUR'||ccy=='rur') {
                //RUR

                baseCurrencyBuy = data[2].buy;
                baseCurrencySale = data[2].sale;
            }else if(ccy=='BTC'||ccy=='btc') {
                //BTC

                baseCurrencyBuy = data[3].buy;
                baseCurrencySale = data[3].sale;
            }else{
                console.log('Проверьте правильность ввода названия валюты!');
            }

        var conv = new Converter(baseCurrencyBuy,baseCurrencySale);
        console.log('Выбрана валюта' + ' ' + ccy);
        console.log('Покупка' + ' ' + conv.convertToUA(10) + ' '+ 'грн');
        console.log('Продажа' + ' '+ conv.convertTo(31.15));
        console.log(conv.diff());

    } else {
        console.warn(error);
    }
});
