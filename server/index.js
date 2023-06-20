const express = require('express');
const app = express();
const connectDatabase = require('./databaseConfig');
const colors = require('colors');
const morgan = require('morgan');
const cors = require("cors");

const UserRouter = require("./routes/user.route");
const RecipesRouter = require("./routes/recipes.route");

const port = 5000;


app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", UserRouter);
app.use("/recipes",RecipesRouter);

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
  console.log(`> Server is up and running on : http://localhost:${port} `.green.bgWhite);
  connectDatabase();
});
