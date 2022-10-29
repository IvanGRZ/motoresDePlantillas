import express  from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', (_req, res) => {
    res.render('index', {message: "INITIAL CONFIGS"});
});

export default app;