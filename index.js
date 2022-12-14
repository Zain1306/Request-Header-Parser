// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// app.get('/api/:date?', (request, response) => {
//   let input = request.params.date;
  
//   if(input.includes(' ') || input.includes('-')){
//     responseObject['unix'] = new Date(input).getTime()
//     responseObject['utc'] = new Date(input).toUTCString()
//   }else{
//     input = parseInt(input)
    
//     responseObject['unix'] = new Date(input).getTime()
//     responseObject['utc'] = new Date(input).toUTCString()
//   }
  
//   if(!responseObject['unix'] || !responseObject['utc']){
//     response.json({error: 'Invalid Date'})
//   }
  
  
//   response.json(responseObject)
// })

// app.get('/api', (request, response) => {
//   responseObject['unix'] = new Date().getTime()
//   responseObject['utc'] = new Date().toUTCString()
  
//   response.json(responseObject)
// })

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api", (req, res)=>{
  let date = new Date();
  
  return res.json({
    'unix': date.getTime(), 
    'utc': date.toUTCString()
  });  
});
// your first API endpoint... 



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

let responseObject = {}

app.get('/api/:date?', (request, response) => {
  let input = request.params.date
  
  if(input.includes(' ') || input.includes('-')){
    responseObject['unix'] = new Date(input).getTime()
    responseObject['utc'] = new Date(input).toUTCString()
  }else{
    input = parseInt(input)
    
    responseObject['unix'] = new Date(input).getTime()
    responseObject['utc'] = new Date(input).toUTCString()
  }
  
  if(!responseObject['unix'] || !responseObject['utc']){
    response.json({error: 'Invalid Date'})
  }
  
  
  response.json(responseObject)
})

