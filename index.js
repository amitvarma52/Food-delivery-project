import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';
import { connectDb } from './DB/DB.js';
import router from './MVC/Route/Route.js';

// config env file
dotenv.config();


const app = express();
const PORT = process.env.PORT;


// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


// connect db
connectDb();

// Routes

app.get('/',(req,res) => {
    res.send({
        message : 'working'

    })
})

// api routing
app.use('/api/v1/', router);

app.listen(PORT,()=>{
    console.log(`Listening to port number ${PORT}`.bgGreen.white);
} )
