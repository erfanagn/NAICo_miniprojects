const fs = require('fs')

;(async () => {
  fs.readFile('data.json', function readFileCallback (err, data) {
    if (err) {
      console.log(err)
    } else {
      const array = JSON.parse(data)
      const num = Object.keys(array).length
      const collection = []
      for (let i = 0; i < num; i++) {
        const sampleArray = array[i]
        const jsonObj = {}
        jsonObj._id = sampleArray[0]
        jsonObj.Symbol = 'BTC/USDT'
        jsonObj.Open = sampleArray[1]
        jsonObj.High = sampleArray[2]
        jsonObj.Low = sampleArray[3]
        jsonObj.Close = sampleArray[4]
        jsonObj.Vol = sampleArray[5]
        // console.log(jsonObj)
        collection.push(jsonObj)
      }
      console.log(collection)
      fs.writeFile('labeled-data.json', JSON.stringify(collection), function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('The file was saved!')
      })
    };
  })
})()
