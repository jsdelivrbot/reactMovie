// create express web app
const app = require('express')()
// get jsonServer module
const jsonServer = require('json-server')

// for all api endpoints use json server
app.use('/api', jsonServer.router('.data/db.json'))

// serve index.html in public folder
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// serve all javascript files from src folder
app.get('/*.js', (req, res) => {
  res.sendFile(__dirname + '/src' + req.url)
})

// listen for request on port 3000
app.listen(3000)
console.log('Server Listening on port 3000')
