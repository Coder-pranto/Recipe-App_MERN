const mongoose = require("mongoose");
const RecipesModel = require("../models/recipes.model");
const UserModel = require("../models/user.model");


const getRecipes = async (req,res) => {
    try {
        const result = await RecipesModel.find({});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

const createRecipes = async (req,res) => {
    const newRecipe = new RecipesModel(req.body);
      console.log(newRecipe);
      
    try {
        const response = await newRecipe.save();
        res.status(201).json(response);
    } catch (err) {
        res.json(err);
    }
}

const savedRecipesx = async (req, res) => {
  try {
    const recipe = await RecipesModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    await user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    res.json(err);
  }
};

module.exports = {getRecipes, createRecipes, savedRecipesx};