/* mongDB is nice*/

var mongoose = require("mongoose");

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

var Work = mongoose.model('Work', WorkSchema);

var entry = new Work({
    author: 'Steven van den Hout',
    title: 'serious gaming',
    body: "serious gaming is fun"
});

// entry.save(function (err) {if (err) console.log ('Error on save!')});

Work.find({author: "Steven van den Hout"}).exec(function(err, result) {
  if (!err) {
    console.log(result);
  } else {
    console.log(err);
    };
});