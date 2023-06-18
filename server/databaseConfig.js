
const mongoose = require('mongoose')
const uri ='mongodb://localhost:27017/recipeDB'

const connectDatabase = async()=>{
    try {
      await  mongoose.connect(uri , { useNewUrlParser : true, useUnifiedTopology : true})
      console.log('> Database Connected...'.bgCyan);
    } catch (error) {
        console.log(`> Error while connecting to mongoDB : ${error.message}`.underline.red );
        process.exit(1);  
    }
}

module.exports = connectDatabase;