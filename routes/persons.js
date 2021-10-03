
var Router = require('express').Router()
const {getConnection} = require('../src/connections')

Router.get('/:uid', async (req,res,next) =>{
    var {uid} = req.params
    console.log(uid)
    var db = await getConnection()
    var r = await db.collection('persons').findOne({uid:Number(uid)}).catch((error) => console.log(error))
    console.log(r)
    res.send(r)
})
.post('*',async(req,res,next) =>{

    var db = await getConnection()
    var {uid} = req.body

    try {
        var r = await db.collection('persons').insertOne({uid})
        console.log(r)
        res.send(r)
    }catch(error) {
        res.send(error)
    }
    

    

})

module.exports=Router