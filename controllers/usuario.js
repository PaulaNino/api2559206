const {response} = require('express')//Importar paquetes requeridos

const Usuario = require('../models/usuario') //Importacion de los modelos


//CONSULTAR
const usuarioGet = async(req, res = response) => {
    const {nombre} =  req.query//DESESTRUCTURACION,  Obteniendo lo que se esta enviando desde thunder ej
    
    const usuarios = await Usuario.find()//Buscar todos los ususarios
    
    
    
    
    res.json({
        usuarios
    })
}


//REGISTRAR
const usuarioPost = async(req, res = response) => {
    const body = req.query //Captura de atributos
    const usuario = new Usuario(body)//Instanciar el objeto
    //const {nombre, password, rol, estado} = req.body//DESESTRUCTURAR
    await usuario.save()

    res.json({
        msg: 'La insercion se efectuo exitosamente'
    })
}


module.exports = {
    usuarioGet,
    usuarioPost
    
}