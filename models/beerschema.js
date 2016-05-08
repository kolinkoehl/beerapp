/**
 * Created by kolinkoehl on 4/24/16.
 */
var mongoose   = require('mongoose');

var Schema       = mongoose.Schema;

var BeerSchema   = new Schema({
    name: String,
    brewery: String,
    style: String,
    notes: String,
    ABV: Number,
    IBU: Number,
    rating: Number
});

module.exports = mongoose.model('Beer', BeerSchema);