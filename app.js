var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json({type: 'application/*+json'}));


var birds = [];

app.get('/', (req, res) => res.json({msg: 'welcome to bird finder'}));

app.post('/bird', (req, res) =>{
  if(!req.body) res.status('400').json({msg: 'send a valid bird'});
  var bird = req.body.bird;
  birds.push(bird);
  res.json({msg: birds});
  return;
});

app.get('/bird', (req, res) => {
 res.json({msg: birds});
 return;
});


app.listen(3000);

module.exports = app;
