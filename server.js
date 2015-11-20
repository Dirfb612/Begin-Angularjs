// server.js (Express 4.0)
var express = require('express'),
   morgan = require('morgan'),
   bodyParser = require('body-parser'),
   methodOverride = require('method-override'),
   cors = require('cors'),
   app = express();

//app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(express.static('public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					         // log every request to the console
//app.use(bodyParser());
app.use(bodyParser.urlencoded({                 // pull information from html in POST
   extended: true
}));
app.use(methodOverride()); 					      // simulate DELETE and PUT
app.use(cors());                                // enable CORS


app.get('/assets/bigJSON', function (req, res) {
   res.sendFile(__dirname + '/assets/bigJSON.json');
});

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Jero says", "Fuck you!!");
   next();
});

var frameworks = [
      {id: 1, name: 'Angular', company: 'Google'},
      {id: 2, name: 'Falcor', company: 'Netflix'},
      {id: 3, name: 'React', company: 'Facebook'},
      {id: 4, name: 'Falcor', company: 'Netflix'},
      {id: 5, name: 'React', company: 'Facebook'},
      {id: 6, name: 'Falcor', company: 'Netflix'},
      {id: 7, name: 'React', company: 'Facebook'},
      {id: 8, name: 'Falcor', company: 'Netflix'},
      {id: 9, name: 'React', company: 'Facebook'},
      {id: 10, name: 'Falcor', company: 'Netflix'},
      {id: 11, name: 'React', company: 'Facebook'},
      {id: 12, name: 'Falcor', company: 'Netflix'},
      {id: 13, name: 'React', company: 'Facebook'},
      {id: 14, name: 'Falcor', company: 'Netflix'},
      {id: 15, name: 'React', company: 'Facebook'},
      {id: 16, name: 'Falcor', company: 'Netflix'},
      {id: 17, name: 'React', company: 'Facebook'},
      {id: 18, name: 'Falcor', company: 'Netflix'},
      {id: 19, name: 'React', company: 'Facebook'},
      {id: 20, name: 'Falcor', company: 'Netflix'},
      {id: 21, name: 'React', company: 'Facebook'},
      {id: 22, name: 'Falcor', company: 'Netflix'},
      {id: 23, name: 'React', company: 'Facebook'},
      {id: 24, name: 'Falcor', company: 'Netflix'},
      {id: 25, name: 'React', company: 'Facebook'},
      {id: 26, name: 'Falcor', company: 'Netflix'},
      {id: 27, name: 'React', company: 'Facebook'},
      {id: 28, name: 'Falcor', company: 'Netflix'},
      {id: 29, name: 'React', company: 'Facebook'},
      {id: 30, name: 'RxJs', company: 'Microsoft'}
   ],
   lastId = frameworks.length + 1;

app.get('/frameworks', function (req, res) {
   res.send(frameworks);
});

app.post('/framework', function (req, res) {

   var framework = req.body;
   console.log('--- req.body--- ');
   console.log(req.body);

   framework.id = lastId;
   lastId++;
   frameworks.push(framework);
   res.send(framework);

   console.log('--- framework--- ');
   console.log(framework);
});

app.post('/framework/:id/done', function (req, res) {
   var frameworkId = req.params.id,
      framework = null;
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         framework = frameworks[i];
         break;
      }
   }
   framework.name = 'Done - ' + framework.name;
   res.send(frameworks);
});

app.get('/framework/:id', function (req, res) {
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         res.send(frameworks[i]);
         break;
      }
   }
   res.send({msg: 'Note not found'}, 404);
});

app.post('/framework/:id', function (req, res) {
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         frameworks[i] = req.body;
         frameworks[i].id = req.params.id;
         res.send(frameworks[i]);
         break;
      }
   }
   res.send({msg: 'Note not found'}, 404);
});

app.get('/', function (req, res) {
   res.render('index', {});
});

var symbols = [
      {id: 1, symbol: 'Angular', price: '10000'},
      {id: 2, symbol: 'Falcor', price: '50000'},
      {id: 3, symbol: 'React', price: '20000'},
      {id: 4, symbol: 'RxJs', price: '131313'}
   ],
   lastId = symbols.length + 1;

app.get('/symbols', function (req, res) {
   res.send(symbols);
});

var PORT = 1989;
app.listen(PORT);

console.log('Open http://localhost:' + PORT + ' to access the files right now');