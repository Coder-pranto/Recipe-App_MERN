const express = require('express');
const router = express.Router();
const { verifyToken } = require("../controllers/user.controller");
const {getRecipes, createRecipes, saveUserRecipe, getRecipeByID,  getSavedRecipes} = require('../controllers/recipes.controller');



router.get("/", getRecipes )
router.post('/',verifyToken, createRecipes);
router.put('/', saveUserRecipe);
router.get("/savedRecipes/ids/:userId", getRecipeByID);
router.get("/savedRecipes/:userId", getSavedRecipes);

module.exports = router;