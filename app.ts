import express from 'express';
import cartItems from './routes'
import IProduct from './product.interface'

const app = express();
const port = 3000;

app.use('/cart-items', cartItems)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let products: IProduct[] = [
    { id: '1', product: 'Almond Milk', price: 2.49, quantity: 3 },
    { id: '2', product: 'Tofu', price: 2.99, quantity: 2 },
    { id: '3', product: 'Green Tea', price: 3.99, quantity: 1 },
    { id: '4', product: 'Cereal', price: 3.29, quantity: 3 }    
]

export default products