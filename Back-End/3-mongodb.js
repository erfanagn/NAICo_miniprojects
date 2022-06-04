const fs = require('fs')
const MongoClient = require('mongodb').MongoClient

// Reading the file to load in mongodb
fs.readFile('labeled-data.json', function readFileCallback (err, data) {
  if (err) {
    console.log(err)
  } else {
    const docs = JSON.parse(data)
    // console.log(docs)
  };
})

// Connecting to mongodb atlas

const uri = 'mongodb+srv://<username>:<password>@<project>.mongodb.net/test'

const client = new MongoClient(uri)

async function run () {
  try {
    await client.connect()

    const database = client.db('binance')
    const collection = database.collection('OHLCV')

    const insertManyresult = await collection.insertMany(docs)
    console.log(`${insertManyresult.insertedCount} documents were inserted.`)
    // const ids = insertManyresult.insertedIds
    // for (let id of Object.values(ids)) {
    //     console.log(`Inserted a document with id ${id}`);
    // }
  } catch (e) {
    console.log('A MongoBulkWriteException occurred, but there are successfully processed documents.')
    const ids = e.result.result.insertedIds
    for (const id of Object.values(ids)) {
      console.log(`Processed a document with id ${id._id}`)
    }
    console.log(`Number of documents inserted: ${e.result.result.nInserted}`)
  } finally {
    await client.close()
  }
}
run().catch(console.dir)
