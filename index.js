import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import InvoiceRoute from './routes/InvoiceRoute.js'

dotenv.config();

// intializtion
const app=express();
const port=process.env.PORT||1234;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// apis
app.use('/api/invoices',InvoiceRoute);



// server listening
app.listen(port,()=>{
    connectDB()
    console.log(`server is running on http://localhost:${port}`)
})
