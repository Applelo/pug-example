const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './app')
app.use(express.static('app/public'));
app.get('/', function (req, res) {
  res.render('index', {})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))