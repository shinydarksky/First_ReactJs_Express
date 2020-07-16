const express = require('express')
 
const app = express()
 
app.get('/', (req, res) => {
   res.send('hello from server!')
})

app.get('/api/helloworld', (req, res) => {
  res.json({sayHi: 'Nội dung của server 1'})
})

app.get('/api/helloworld2', (req, res) => {
   res.json({sayHi: 'Nội dung của server 2 '})
 })

app.listen(5000, () => {
   console.log('App listening on port 5000')
})