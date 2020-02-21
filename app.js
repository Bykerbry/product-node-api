"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var port = 3000;
app.use('/cart-items', routes_1.default);
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
var products = [
    { id: '1', product: 'Almond Milk', price: 2.49, quantity: 3 },
    { id: '2', product: 'Tofu', price: 2.99, quantity: 2 },
    { id: '3', product: 'Green Tea', price: 3.99, quantity: 1 },
    { id: '4', product: 'Cereal', price: 3.29, quantity: 3 }
];
exports.default = products;
