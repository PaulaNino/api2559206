//ENRUTAR
const {Router} = require('express')

const route = Router() 

const {usuarioGet, usuarioPost} = require('../controllers/usuario')//Importar metodos del controlador

route.get('/', usuarioGet)
route.post('/', usuarioPost)



route.get('/', (req, res) => {
    res.json({
        msg: 'API GET'
    })
})

route.post('/', (req, res) => {
    res.json({
        msg: 'API POST'
    })
})

route.put('/', (req, res) => {
    res.json({
        msg: 'API PUT'
    })
})

route.delete('/', (req, res) => {
    res.json({
        msg: 'API DELETE'
    })
})

module.exports = route