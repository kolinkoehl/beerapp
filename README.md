# beerapp
MEAN beer app

Run server from www file in bin

App allows you to create/update and delete breweries and beer

/api/beer  //allows you to POST beer or Get all beers
Current Object:
{
  name:String,
  Type: String,
  ABV: Number,
  IBU: Number,
  Rating: Number
}
  

/api/beer/beer_id //allows you to GET, PUT, or DELETE Beers by ID

/api/brewery //allows you to POST a brewery or GET all breweries
Object:
{
name: String,
Street: String,
City: String,
Zip: Number,
State: String
}

/api/brewry/brewry_id //allos you to GET, PUT, or DELETE Breweries by ID

So far you can just name the beer and brewry. They are stored in mongo. 

More to come


Beer update: you can now add name, style, ABV, IBU and ratings to beer in API
