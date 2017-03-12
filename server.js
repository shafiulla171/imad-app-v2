var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user : 'shafiulla171',
    host : 'db.imad.hasura-app.io',
    database : 'shafiulla171',
    port : '5432',
    password : process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));



var articles={
     'article-one':{
    tittle:'Article One | shafeeq',
    heading:'this is article one',
    date:'8 feb 2017',
    content:` <p>
                  this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
              </p>
              <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
            </p>
            <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
            </p>`
     },
     'article-two':{
    tittle:'Article Two | shafeeq',
    heading:'this is article Two',
    date:'8 feb 2017',
    content:` <p>
                  this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
              </p>
          `
     },
     'article-three':{
         tittle:'Article Two | shafeeq',
    heading:'this is article Two',
    date:'8 feb 2017',
    content:'<p>this is just to see</P>'
    }
};
function createTemplate(data){
var tittle=data.tittle;
var date=data.date;
var content=data.content;
var heading=data.heading;
var htmlTemplate=
` <html>
    <head>
        <title>
           ${tittle}
        </title>
      <link href="/ui/style.css" rel="stylesheet" />
    
     </head>
    <body>
        <div class='container'>
        <div> 
        <a href='/'>home</a>
        </div>
        <hr>
        <h3>
          ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool = new Pool(config);
app.get('/test-db', function(req,res){
   //make a request
   //select a response
   pool.query('SELECT=FROM test',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           res.send(JSON.stringify(result));
       }
   });
});



var counter=0;
app.get('/counter',function(req,res){
  counter = counter+1;
  res.send(counter.toString());
});


var names = [];
app.get('/submit-name',function(req,res) {//querry submit-name?name=xx
    var name=req.query.name;
    //pushing this typed name into names
    names.push(name); 
    //javascript object notation
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req,res){
    //articleName=article-one
    //articles[articleName]=contents of article-one
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


