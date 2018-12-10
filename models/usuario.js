var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;


var usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, required: [true, 'El correo es necesario'], unique: true },
    password: { type: String, required: [true, 'El password es necesario'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE' }

});

usuarioSchema.plugin(uniqueValidator, { message: 'El correo debe de ser único' });
module.exports = mongoose.model('Usuario', usuarioSchema);