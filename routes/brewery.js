/**
 * Created by kolinkoehl on 4/23/16.
 */
var express = require('express');
var router = express.Router();
var Brewery = require('../models/breweryschema');

router.get('/', function(req, res) {
    res.json({ message: 'testing our brewery API!' });
});

// more routes for our API will happen here

// on routes that end in /brewery
// ----------------------------------------------------
router.route('/brewery')

    // create a bear (accessed at POST http://localhost:3000/brewery)
    .post(function(req, res) {

        var brewery = new Brewery();      // create a new instance of the brewry model
        brewery.name = req.body.name;  // set the breweries name (comes from the request)
        brewery.address.street = req.body.address.street; //set the breweries street in a string
        brewery.address.city = req.body.address.city; //set the brewery's city in string
        brewery.address.state = req.body.address.state; //set the brewery's state in string
        brewery.address.zip = req.body.address.zip; //set the brewrey's zip
        //save the brewery and check for errors
        brewery.save(function(err) {
            if (err)
                res.send(err);
            else {
                res.json({message: brewery.name + ' created!'});
            }
            
        });

    })

    .get(function(req, res) {
        Brewery.find(function(err, brewery) {
            if (err)
                res.send(err);

            res.json(brewery);
        });
    });

router.route('/brewery/:brewery_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Brewery.findById(req.params.brewery_id, function(err, brewery) {
            if (err)
                res.send(err);
            res.json(brewery);
        });
    })

    .put(function(req, res) {

        // use our bear model to find the bear we want
        Brewery.findById(req.params.brewery_id, function(err, brewery) {

            if (err)
                res.send(err);

            brewery.name = req.body.name;  // set the breweries name (comes from the request)
            brewery.address.street = req.body.address.street; //set the breweries street in a string
            brewery.address.city = req.body.address.ity; //set the brewery's city in string
            brewery.address.state = req.body.address.state; //set the brewery's state in string
            brewery.address.zip = req.body.address.zip; //set the brewrey's zip

            // save the bear
            brewery.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'brewery updated!' });
            });

        });
    })

    .delete(function(req, res) {
        Brewery.remove({
            _id: req.params.brewery_id
        }, function(err, brewery) {
            if (err)
                res.send(err);

            res.json({ message: 'Brewery Successfully deleted' });
        });
    });




module.exports = router;