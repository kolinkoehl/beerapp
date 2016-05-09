/**
 * Created by kolinkoehl on 4/24/16.
 */
var mongoose   = require('mongoose');

var Schema       = mongoose.Schema;

var BeerSchema;
BeerSchema = new Schema({
    beerMaster: {
        name: String,
    },
    brewery: String,
    style: String,
    notes: String,
    ABV: Number,
    IBU: Number,
    rating: Number,
    upvote: Number,
    downvote: Number
});

module.exports = mongoose.model('Beer', BeerSchema);