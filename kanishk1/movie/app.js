var express=require("express");
var app=express();
var request= require("request");

app.set("view engine","ejs");

var movies =[];
var i;

    app.get("/",function(req,res){
	request('https://random-word-form.herokuapp.com/random/noun',function (error, response, body){
	 if (!error && response.statusCode == 200 ){
		var newword = body ;
		movies.push(newword); 
		i= movies.indexOf(newword); 
		 res.render('search');
		 
	 }
	});
});
 

app.get("/result",function(req,res){
	
  	
  request('https://www.omdbapi.com/?apikey=4865e2ca&s=' + movies[i] , function (error, response, body) {
  if(!error && response.statusCode  == 200){
	  var movie = JSON.parse(body);
	 
	  res.render('result', {movie : movie});
	}
	  
 });
	
});


 

app.listen(3000,process.env.IP, function(){
	console.log("movie site is working");
})