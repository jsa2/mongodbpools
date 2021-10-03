var {json, urlencoded} = require('express')
var app = require('express')()
var {getConnection} = require('./src/connections')
//https://stackoverflow.com/questions/10656574/how-do-i-manage-mongodb-connections-in-a-node-js-web-application
async function start () {

var db = await getConnection('users')
db.collection('persons').findOne({uid:12})
app.use(json())
app.use(urlencoded({extended:true}))
app.use('/persons',require('./routes/persons') )

app.listen(80, () => console.log('r'))

}

start()
