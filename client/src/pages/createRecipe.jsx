import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const userID = window.localStorage.getItem("userID");
  const [cookies, _] = useCookies(["access_token"]);

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };


  const handleAddIngredient = () => {
    const ingredientList = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients:ingredientList });
  };

const handleIngredientChange = (event, index) => {
  const ingredientList = [...recipe.ingredients];
  ingredientList[index] = event.target.value;
  setRecipe({ ...recipe, ingredients: ingredientList });
};


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/recipes", { ...recipe }, {
          headers: { authorization: cookies.access_token },
        });
      alert("Recipe is Created!");
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };


    return (
      <div className="w-50 m-auto py-4">
        <h1 className="text-center font-weight-bold">Create Recipe</h1>
        <form className="border border-dark p-4" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={recipe.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            {recipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                className="form-control mb-2"
                name="ingredients"
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
              />
            ))}
            <button type="button" className="btn btn-secondary mx-2" onClick={handleAddIngredient}>
              Add Ingredient
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              className="form-control"
              id="instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              name="imageUrl"
              value={recipe.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cookingTime">Cooking Time (minutes)</label>
            <input
              type="number"
              className="form-control"
              id="cookingTime"
              name="cookingTime"
              value={recipe.cookingTime}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Recipe
          </button>
        </form>
      </div>
    );

};

export default CreateRecipe

/* 
export const CreateRecipe = () => {
  const [cookies, _] = useCookies(["access_token"]);
  */

  