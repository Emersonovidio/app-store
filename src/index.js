import express from "express"
import routes from "./routes.js";
import database from "./database.js";


const app = express();
app.use(express.json());
app.use(routes);


// const bodyParser = require('body-parser');
// const product = require('./controllers/productController');


// app.use(bodyParser.json());
database.sync(() => console.log(`Banco conectado: ${process.env.DB_NAME}`));

// app.use('/products', product);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});