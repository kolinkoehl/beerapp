/**
 * Created by kolinkoehl on 4/24/16.
 */
var mongoose   = require('mongoose');

var Schema       = mongoose.Schema;

var BeerSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Beer', BeerSchema);