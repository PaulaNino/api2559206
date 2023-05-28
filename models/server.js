const express = require('express')
const {dbConnection} = require('../database/config')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT //Capturando variable puerto
        this.usuarioPath = '/api/usuario' //Ruta pública
        this.middlewares()//Puentes, enlaces Ayudas
        this.conectarDB()//Conectar a la base de datos
        this.routes()


    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));
    }

    routes() {
       this.app.use(this.usuarioPath, require('../routes/usuarios'))
    }

    async conectarDB(){
        await dbConnection()//Trabajar funciones de manera asincronicas porque no sabemos cuanto tiempo se va a demorar en ejecutar o dar resouesta
    }
}



module.exports = { Server }
