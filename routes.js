"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var shortid_1 = __importDefault(require("shortid"));
var app_1 = __importDefault(require("./app"));
// const app = express();
var cartItems = express_1.default.Router();
cartItems.use(express_1.default.json());
cartItems.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
cartItems.get('/', function (req, res) {
    res.status(200);
    res.json(app_1.default);
});
cartItems.get('/:id', function (req, res) {
    var product = app_1.default.find(function (product) { return product.id === req.params.id; });
    if (product) {
        res.status(200);
        res.json(product);
    }
    else {
        res.status(404);
        res.send('Product Id not found.');
    }
});
cartItems.post('/', function (req, res) {
    var body = req.body;
    console.log(body);
    body.id = shortid_1.default.generate();
    app_1.default.push(body);
    res.json(app_1.default);
    res.status(201);
});
cartItems.put('/:id', function (req, res) {
    var productIndex = app_1.default.findIndex(function (product) { return product.id === req.params.id; });
    if (productIndex >= 0) {
        app_1.default[productIndex] = {
            id: req.params.id,
            product: req.body.product,
            price: req.body.price,
            quantity: req.body.quantity
        };
        res.json(app_1.default);
    }
    else {
        res.status(404);
        res.send('Product Id not found.');
    }
    ;
});
cartItems.delete('/:id', function (req, res) {
    var productIndex = app_1.default.findIndex(function (product) { return product.id === req.params.id; });
    if (productIndex >= 0) {
        console.log(app_1.default[productIndex]);
        app_1.default.splice(productIndex, 1);
        res.json(app_1.default);
    }
    else {
        res.status(404);
        res.send('Product Id not found.');
    }
    ;
});
exports.default = cartItems;
