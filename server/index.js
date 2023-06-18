const express = require('express');
const connectDatabase = require('./databaseConfig');
const colors = require('colors');
const morgan = require('morgan');
const app = express();
const port = 5000;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

//default
app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});


//route error 
app.use((req,res,next)=>{
  res.status(404).json({Message: "route not found"})
})



//handling server side error
app.use((err,req,res,next)=>{
  res.status(500).json({message:'something is broke'});
})


app.listen(port, () => {
  console.log(`> Server is up and running on : http://localhost: ${port} `.green.bgWhite);
  connectDatabase();
});
