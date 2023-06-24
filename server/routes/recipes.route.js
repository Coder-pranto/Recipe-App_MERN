const express = require('express');
const router = express.Router();

const {getRecipes, createRecipes, savedRecipesx, getRecipeByID,  getSavedRecipes} = require('../controllers/recipes.controller');



router.get("/", getRecipes )
router.post('/', createRecipes);
router.put('/', savedRecipesx);
router.get("/savedRecipes/ids/:userId", getRecipeByID);
router.get("/savedRecipes/:userId", getSavedRecipes);

module.exports = router;