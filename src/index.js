import express from "express"
// import routes from "./routes.js";
// import database from "./database.js";
const product = "./controllers/productController.js";


const app = express();
app.use(express.json());


// const bodyParser = require('body-parser');


// app.use(bodyParser.json());
// database.sync(() => console.log(`Banco conectado: ${process.env.DB_NAME}`));

app.use('/products', product);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});