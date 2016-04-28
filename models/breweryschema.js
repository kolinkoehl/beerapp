/**
 * Created by kolinkoehl on 4/24/16.
 */

var mongoose   = require('mongoose');

var Schema       = mongoose.Schema;

var BrewrySchema   = new Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number

    }

});

module.exports = mongoose.model('Brewery', BrewrySchema);