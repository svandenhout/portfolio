mongoose = require("mongoose");

// returns the Work model
exports.start = function() {
    var db = mongoose.connection;

    var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/Portfolio';

    var theport = process.env.PORT || 5000;

    // connecting to database
    mongoose.connect(uristring, function(err, res) {
        if(!err) {
            console.log("connected");
        }else {
            console.log("error connecting" + err);
        }
    });

    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;

    var WorkSchema = new Schema({
        author: String,
        title: String,
        body: String,
        image: String,
        date: Date
    });

    return mongoose.model('Work', WorkSchema);
}