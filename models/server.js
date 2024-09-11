const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended:true}));
        this.app.set('view engine', 'hbs');
    }

    routes(){
        this.app.get("/", (req, res) => {
            res.render('index');
        });
        
        this.app.post("/login", (req, res) => {
            const parametros = req.body;
            res.render('bienvenida', {
                nombreUsuario: parametros.txtNombreUsuario,
                clientes: [
                    {
                        nombre:"cliente uno",
                        correo: "clienteUno@mail.com",
                        direccion: "dirección uno"
                    },
                    {
                        nombre:"cliente dos",
                        correo: "clienteDos@mail.com",
                        direccion: "dirección dos"
                    },
                    {
                        nombre:"cliente tres",
                        correo: "clienteTres@mail.com",
                        direccion: "dirección tres"
                    },
                    {
                        nombre:"cliente cuatro",
                        correo: "clienteCuatro@mail.com",
                        direccion: "dirección cuatro"
                    }
                ]
            });
        });
    }

    listen(){
        this.app.listen(3000, () => {
            console.log('Escuchando por el puerto 3000');
        });
    }

}

module.exports = Server;