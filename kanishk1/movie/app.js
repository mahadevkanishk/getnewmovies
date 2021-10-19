var express=require("express");
var app=express();
var request= require("request");
var randomWords=require("random-words");

app.use(express.static('views'))
app.use('/css',express.static(__dirname + 'views/css'))


app.set("view engine","ejs");



    app.get("/",function(req,res){
	res.render('search');
});


 

app.get("/result",function(req,res){
	
  	
  request('https://www.omdbapi.com/?apikey=4865e2ca&s=' + randomWords() , function (error, response, body) {
  if(!error && response.statusCode  == 200){
	  var movie = JSON.parse(body);
	 
	  res.render('result', {movie : movie});
	}
	  
 });
	
});


 

app.listen(3000,process.env.IP, function(){
	console.log("movie site is working");
})