const mongoose =  require("mongoose");

const recipeSchema = mongoose.Schema({
    name: { type: String, required: true },
    ingredients: [{ type: String, required: true }],// more than one ingredients
    instructions: { type: String, required: true },
    imageUrl: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    userOwner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  });
  

module.exports= mongoose.model("Recipes", recipeSchema);