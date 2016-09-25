var mongoose = require('mongoose'),  RegistroQR = mongoose.model('RegistroQR');

exports.findAll = function(req, res) {
  Song.find({}, function(err, songs) {
    if (err) {
      throw new Error(err);
    }
    res.send(songs);
  });
};