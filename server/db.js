/*
 * handles the database by building a model, 
 * you can use the model 
 */

mongoose = require("mongoose");

// returns the Work model
exports.start = function(callback) {
  var db = mongoose.connection;
  var name = "Work"

  var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/Portfolio';

  var theport = process.env.PORT || 5000;

  // connecting to database
  mongoose.connect(uristring, function(err, res) {
    if(!err) {
      var Schema = mongoose.Schema;

      var WorkSchema = new Schema({
        author: String,
        title: String,
        body: String,
        image: String,
        date: Date
      });

      var Work = mongoose.model(name, WorkSchema);
      callback(Work);
    }else {
      console.log("error connecting" + err);
    }
  }); 
}