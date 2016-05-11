/**
 * Created by kolin.koehl on 5/11/2016.
 */
var http = require("http");
var requestify = require('requestify');

var token = "?key=c1535d60f386beceda7e8b00998ecfb6";

//requestify.get('http://api.brewerydb.com/v2/beer/random'+token).then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
  //  console.log(response.getBody());

    // Get the response raw body
    //console.log(response.body);
//});
var randomBeers = [];

var isDone = false;


var breweryname = function (name){
    requestify.get('http://api.brewerydb.com/v2/'+name+token).then(function(response) {
        // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
        // console.log(response.getBody());
        randomBeers.push(response.getBody());
        // Get the response raw body
        //console.log(response.body);
        if(isDone){
            pickYourFavorite();
        }
    });
};

// var random = breweryname('beer/random');
// console.log(random);

//var onebeer = breweryname('beer/oeGSxs');
//console.log(onebeer);

for (i = 0; i < 5; i++){
    if(i == 1){
        isDone = true;
    }
  breweryname('beer/random');

}

// setTimeout(function(){console.log(randomBeers);}, 5000);
var pickYourFavorite = function(){
    console.log(randomBeers);
};