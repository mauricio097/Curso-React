const Todo = require('./todo')

Todo.methods(['get', 'post', 'put' , 'delete']) // HTTPS suportados
Todo.updateOptions({new: true, runValidators: true}) // Devolve o novo registro após atualizado

module.exports = Todo
