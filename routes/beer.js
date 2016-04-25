/**
 * Created by kolinkoehl on 4/24/16.
 */
var express = require('express');
var router = express.Router();
var Beer = require('../models/beerschema');

router.get('/', function(req, res) {
    res.json({ message: 'testing our beer API!' });
});

// more routes for our API will happen here

// on routes that end in /brewery
// ----------------------------------------------------
router.route('/beer')

    // create a bear (accessed at POST http://localhost:3000/brewery)
    .post(function(req, res) {

        var beer = new Beer();      // create a new instance of the beer model
        beer.name = req.body.name;  // set the beer name (comes from the request)
        beer.style = req.body.style; // set the beer style
        beer.ABV = req.body.ABV; // set the ABV
        beer.IBU = req.body.IBU; //set the IBU
        beer.rating = req.body.rating; // set the rating

        // save the brewery and check for errors
        beer.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: beer.name + ' created!' });
        });

    })

    .get(function(req, res) {
        Beer.find(function(err, beer) {
            if (err)
                res.send(err);

            res.json(beer);
        });
    });

router.route('/beer/:beer_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Beer.findById(req.params.beer_id, function(err, beer) {
            if (err)
                res.send(err);
            res.json(beer);
        });
    })

    .put(function(req, res) {

        // use our bear model to find the bear we want
        Beer.findById(req.params.beer_id, function(err, beer) {

            if (err)
                res.send(err);

            beer.name = req.body.name;  // update the bears info

            // save the bear
            beer.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'beer updated!' });
            });

        });
    })

    .delete(function(req, res) {
        Beer.remove({
            _id: req.params.beer_id
        }, function(err, beer) {
            if (err)
                res.send(err);

            res.json({ message: 'beer Successfully deleted' });
        });
    });




module.exports = router;