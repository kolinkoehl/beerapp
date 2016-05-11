/**
 * Created by kolin.koehl on 5/11/2016.
 */
var http = require("http");
var requestify = require('requestify');

var token = "?key=c1535d60f386beceda7e8b00998ecfb6";

requestify.get('http://api.brewerydb.com/v2/beer/random'+token).then(function(response) {
    // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
    response.getBody();

    // Get the response raw body
    console.log(response.body);
});