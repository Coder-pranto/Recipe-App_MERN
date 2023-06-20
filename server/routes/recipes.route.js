const express = require('express');
const router = express.Router();

const {getRecipes, createRecipes, savedRecipesx} = require('../controllers/recipes.controller');



router.get("/", getRecipes )
router.post('/', createRecipes);
router.put('/', savedRecipesx);

module.exports = router;