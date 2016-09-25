var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistroQR = new Schema({
    fecha : Date,
    idObjeto: String,
    idTrabajador: String,
    securityCode: Number,
    consecutivo: Number
}, {
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret, options) {
      ret.id = ret._id.toHexString();
      delete ret._id;
    }
  },
  
  toObject: {
    virtuals: true
  }
});

mongoose.model('RegistroQR', RegistroQR);