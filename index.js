//1.Crear un objetos express

const express=require('express');
const bodyParser = require('body-parser');
//2.Crear un objeto que represente nuestra aplicacion

const app = express();



app.use(express.json());

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
    }
);


//definir los entry point de la API
//Definir la ruta (la url) en donde va a responder nuestra API

app.post(
    '/sumar',
    //Se reuieren dos objetos uno representado la peiticion y otro representando la respuesta
    (req, res)=>{
        let resultado;
        try {
            const {numeroUno, numeroDos}= req.body; 
            resultado= parseFloat(numeroUno)+parseFloat(numeroDos);
        } catch (error) {
            resultado=error;
        }

        /*
        const n1 = req.body.numeroUno;
        const n2 = req.body.numeroDos;
        */
        
        res.json(resultado);
    }
);

app.post(
    '/restar',
    (req, res)=>{
        let resultado;
        try {
            const {numeroUno, numeroDos}= req.body; 
            resultado= parseFloat(numeroUno)-parseFloat(numeroDos);
        } catch (error) {
            resultado=error;
        }

        /*
        const n1 = req.body.numeroUno;
        const n2 = req.body.numeroDos;
        */
        
        res.json(resultado);
    }
)

app.post(
    '/dividir',
    (req, res)=>{
        
        let resultado;
        try {
            const {numeroUno, numeroDos}= req.body; 
            resultado= parseFloat(numeroUno)/parseFloat(numeroDos);
        } catch (error) {
            resultado=error;
        }

        /*
        const n1 = req.body.numeroUno;
        const n2 = req.body.numeroDos;
        */
        
        res.json(resultado);
    }
);

app.post(
    '/multiplicar',
    (req, res)=>{
        let resultado;
        try {
            const {numeroUno, numeroDos}= req.body; 
            resultado= parseFloat(numeroUno)*parseFloat(numeroDos);
        } catch (error) {
            resultado=error;
        }

        /*
        const n1 = req.body.numeroUno;
        const n2 = req.body.numeroDos;
        */
        
        res.json(resultado);
    }
)

app.post(
    '/sumanumeros',
    (req, res)=>{
        
        let resultado = 0;
        let numeros = req.body.numeros;
        for (let i = 0; i < numeros.length; i++) {
          resultado += numeros[i];
        }
        res.json(resultado);
    }
);


//3.Crear un servicio para escuchar peticiones

app.listen(
    3000,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3000");
    }
);