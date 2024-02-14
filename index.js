//Conexion basica de servidor con express y NODE
const express = require("express");

const app = express();

//el metodo ALL funcina con todos los tipos de metodo
//GET,POST,DELETE.....
app.all('/profile',(req, res) => {
  res.send('profile page')
})

app.get("/hello/:user", (req, res) => {
  res.send(`Hello ${req.params.user}`);
});

/*
//condicionantes para evitar accesos a otros usuarios
app.get("/hello/:user/photo", (req, res) => {

    if(req.params.user === "ulises"){
        return res.sendFile('./chems.png',{
            root: __dirname
        })
    }

    res.send('Usuario no permitido')

});
*/

/*
//Envio de parametros por url y mostrar operaciones con ellos
app.get("/hello/:x/:y", (req, res) => {

    const numero1 = parseInt(req.params.x)
    const numero2 = parseInt(req.params.y)

    res.send(`los numeros son: ${numero1} y ${numero2} y el resultado es: ${numero1+numero2}`);

  });
*/

/*
//envio de una imagen
app.get("/photo", (req, res) => {

    res.sendFile('./chems.png',{
        root: __dirname
    })

});
*/

/*
//metodos para leer los datos siempre deben ir antes de la ruta
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post("/user", (req, res) => {
    console.log(req.body)
    res.send('Nuevo usuario creado');
  });
*/

//ENVIO DE JSON
/*app.get("/user", (req, res) => {
  res.json({
    name: "Ulises",
    lastname: "Hernandez",
    age: 40,
    points: [1, 2, 3],
    addres: {
      city: "newyork",
      street: "some street 123",
    },
  });
});

app.get("/isAliver", (req, res) => {
    //el codigo 204 confirma la conexion al servidor pero no retorna dato alguno
    res.sendStatus(204)
  });*/
  

/*app.get('/products',(req, res) => {
    //
    //query a bases de datos
    //procesar datos
    //validar datos
    //modificar datos

    res.send('lista de productos')
})

app.post('/products',(req, res) => {
    res.send('creando productos')
})

app.put('/products',(req, res) => {
    res.send('actualizando un producto')
})

app.delete('/products',(req, res) => {
    res.send('eliminando productos')
})

app.patch('/products',(req, res) => {
    res.send('actualizando una parte del producto')
})*/

app.listen(3000);
console.log(`Server run on port ${3000}`);
