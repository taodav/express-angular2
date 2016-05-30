var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

app.get('/', function(req, res){
  res.json({data: {hero: "SUPERMAN"}})
})

app.listen(9393, function(){
  console.log("Listening on localhost:9393")
})
