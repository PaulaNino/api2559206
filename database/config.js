//
const mongoose = require('mongoose')

//Cadena de conexion basica hacia mongo empleando mongoose
const dbConnection = () => {
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexión exitosa al servidor')
    }
    catch(error){
        console.log('Error en BD')
        throw error('Error conectando a la base de datos')
        // throw new Error('Error conectando a la base de datos')
    }
}

//Exportar para 
module.exports = {dbConnection}