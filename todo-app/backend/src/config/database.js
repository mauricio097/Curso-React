const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Definindo a biblioteca do Mongoose como a padrão do Node
module.exports = mongoose.connect('mongodb://localhost/todo',{ useNewUrlParser: true })
