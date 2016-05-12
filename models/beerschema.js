/**
 * Created by kolinkoehl on 4/24/16.
 */
var mongoose   = require('mongoose');

var Schema       = mongoose.Schema;

var BeerSchema;
BeerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    brewery: String,
    availability: String,
    style: String,
    notes: String,
    ABV: Number,
    IBU: Number,
    rating: Number,
    vote: Number
});

module.exports = mongoose.model('Beer', BeerSchema);