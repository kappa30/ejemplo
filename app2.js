const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const uri = "mongodb+srv://matias:67254729@cluster0.wromb.mongodb.net/libreria?retryWrites=true&w=majority";
async function conectar()
{
    try
    {
        await mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conectado a la base de datos metodo: mongoodb - async-await");
    }
    catch(e)
    {
        console.log(e);
    }
};
conectar();



app.listen(3000, ()=>
{
    console.log("Servidor escuchando en el puerto 3000");
});


