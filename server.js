const express=require('express')
const cors=require('cors')
require("dotenv").config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const apiRoutes=require('./apiRouter')
const app=express();

const port= process.env.PORT;
app.use(bodyParser.json());
//app.use(cors());
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}));
apiRoutes.use(cookieParser());
app.use('/apiRouter',apiRoutes)


app.listen(port, (req,res)=>{
    console.log(`This server is listening on Port:${port}`)
})

module.exports=app;