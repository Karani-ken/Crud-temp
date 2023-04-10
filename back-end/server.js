const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDb = require('./config/db')
const cors = require('cors')
const fs = require('fs')
//import routes
const userRouter = require('./routes/userRouter')
const assetRouter = require('./routes/assetRouter')
const livestockRouter = require('./routes/livestockRouter')
const earningsRouter = require('./routes/earnings.Router')
const expensesRouter = require('./routes/expenses.Router')
const authRouter = require('./routes/authRouter')
//port
const port = process.env.PORT 
//database connection
    connectDb()
           
//middlewears
app.use(cors());
app.use(express.json());
//images upload folder
app.use(express.static("../uploads"))    
//routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/assets',assetRouter);
app.use('/livestock',livestockRouter)
app.use('/earnings',earningsRouter)
app.use('/expenses', expensesRouter)  
//server starting   
app.listen(port, ()=> console.log(`server started on port ${port}`.green.underline))

