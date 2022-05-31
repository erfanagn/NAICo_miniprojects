const ccxt = require ('ccxt')
var fs = require('fs');

const exchange = new ccxt.binance () 

;(async () => {
    const symbol = 'BTC/USDT'
    const timeframe = '1d' // one day
    const since = undefined
    const limit = 3 // 30 days = 1 month
    const Data = await exchange.fetchOHLCV (symbol, timeframe, since, limit)
    // console.log (Data)
    fs.writeFile('data.json', JSON.stringify(Data), function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	});
}) ()


	



