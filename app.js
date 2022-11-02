import express  from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const products = [
    {
        title:"Regla",
        price:123.45,
        thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        id:1
    },
    {
        title:"Regla2",
        price:123.45,
        thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        id:2
    }
]

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views', './src/views');
app.set('view engine', 'pug');


app.get('/', (_req, res) => {
    res.render('index', {});
});


app.get('/Products', (_req, res) => {
    res.render('addProduct', {});
});

app.get('/viewProducts', (_req, res) => {
    res.render('viewProduct', {products:products});
});


app.get('/products', (_req, res) => {
    res.status(200).json(products)
});

app.post('/addProduct', (req, res) => {
    res.render('index', {});
    try{
        console.log(req.body)

        const id = products.length;
        const obj = [req.body];
    
        obj.map((item,index)=> {
            item.id = id + (index + 1)
        });
    
        products.push(...obj)
        res.status(200).json({products})
    }
    catch(err){
        res.status(500).json(err)
    }

});

export default app;