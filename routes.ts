import express from 'express';
import shortId from 'shortid';
import products from './app';

const cartItems = express.Router()

cartItems.use(express.json());
cartItems.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

cartItems.get('/', (req, res) => {
    res.status(200);
    res.json(products);
});

cartItems.get('/:id', (req, res) => {
    const product = products.find(product => product.id === req.params.id);
    if (product){
        res.status(200);
        res.json(product);
    } else {
        res.status(404);
        res.send('Product Id not found.');
    }
});

cartItems.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    body.id = shortId.generate();
    products.push(body);
    res.json(products);
    res.status(201);
});

cartItems.put('/:id', (req, res) => {
    const productIndex = products.findIndex(product => product.id === req.params.id);
    if(productIndex >= 0) {
        products[productIndex] = {
            id: req.params.id,
            product: req.body.product,
            price: req.body.price,
            quantity: req.body.quantity
        };
        res.json(products);
    } else {
        res.status(404);
        res.send('Product Id not found.');
    };
});

cartItems.delete('/:id', (req, res) => {
    const productIndex = products.findIndex(product => product.id === req.params.id);
    if (productIndex >= 0 ) {
        console.log(products[productIndex]);
        products.splice(productIndex, 1);
        res.json(products);
    } else {
        res.status(404);
        res.send('Product Id not found.');
    };
});

export default cartItems