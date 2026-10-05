import express from 'express';

const products = [
    {nombre: "camisa", precio: 300, categoria: "remeras"},
    {nombre: "pantalon", precio: 12, categoria: "pantalon"}

]

const app = express();

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`)

    next();
})

app.get("/", (req, res) => {
    res.send("Hola mundo cruelll!!!")
})

app.get("/productos", (req, res) => {
    res.json(products)
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})