const mongoose = require("mongoose");
const RecipesModel = require("../models/recipes.model");
const UserModel = require("../models/user.model");


//Done
const getRecipes = async (req, res) => {
  try {
    const result = await RecipesModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};


//Done
const createRecipes = async (req, res) => {
  const newRecipe = new RecipesModel(req.body);
  console.log(newRecipe);
  try {
    const response = await newRecipe.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};


//Done
const saveUserRecipe = async (req, res) => {
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


// Get user's saved recipe by userId (done)
const getRecipeByID = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    res.status(201).json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get saved recipes
const getSavedRecipes = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    const savedRecipes = await RecipesModel.find({
      _id: { $in: user.savedRecipes },
    });
    console.log(savedRecipes);
    res.status(201).json({ savedRecipes });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {getRecipes, createRecipes, saveUserRecipe, getRecipeByID,  getSavedRecipes};




/* In the code snippet user?.savedRecipes, the ?. is known as the "Optional Chaining" operator in JavaScript. It is used to access properties of an object in a safe manner, especially when the object may be nullish or undefined.

Here's how it works:

    If the user object is defined and not nullish (null or undefined), the expression user?.savedRecipes will evaluate to the value of the savedRecipes property of the user object.

    If the user object is nullish or undefined, the expression user?.savedRecipes will short-circuit and evaluate to undefined. This prevents any potential errors that would occur if you attempted to access a property of a nullish or undefined object directly.

In the given code snippet, the intention is to return the savedRecipes property of the user object if it exists. If the user object is nullish or undefined, the expression will evaluate to undefined, which will be passed as the value of the savedRecipes property in the response object.

Overall, the ?. operator ensures that the code does not throw an error when accessing properties of an object that may be nullish or undefined, providing a more robust and safe way to access nested properties. */