var MONGO = require("mongodb").MongoClient;
var uri = require('./cfg.json').uri
var established 

async function connect (database) {
   console.log('connecting...')
   var c=  await MONGO.connect(uri).catch(error => console.log(error))
   var db = c.db(database)
   console.log('database connected')
   established=db
   return db
}

async function getConnection(database) {
 
    if(established) {
        return established
    } else {
       return await connect(database)
    }

}

module.exports ={getConnection, connect}

