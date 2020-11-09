const http = require("http")
const express = require( "express")
const utils = require('./utils');
const WebSocket = require( "ws")
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const app = express()
const adapter = new FileSync('slides.json')
const db = low(adapter)

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
   res.render('index', {
      isAdmin: false
   })
})

app.get('/admin', function (req, res) {
   res.render('index', {isAdmin: true})
})

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

wss.on('connection', ws => {
   ws.on('message', m => {
      var req = JSON.parse(m)
      if(req.method == 'getActiveSlide') {
         ws.send(utils.getActiveSlide(db))
      }

      if(req.method == 'previousSlide') {
         var previousSlide = utils.previousSlide(db)
         wss.clients.forEach(client => client.send(previousSlide))
      }

      if(req.method == 'nextSlide') {
         var nextSlide = utils.nextSlide(db)
         wss.clients.forEach(client => client.send(nextSlide))
      }

   })

   ws.on("error", e => ws.send(e))
})

server.listen(3000, () => console.log("Server started"))
