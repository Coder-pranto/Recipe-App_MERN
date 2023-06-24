import React, { useEffect, useState } from 'react'
import axios from "axios";
import "animate.css/animate.min.css";
import "animate.css/animate.compat.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = window.localStorage.getItem("userID");


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:5000/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);
  return (
    <div>
      <h1 className="text-center font-weight-bold">Recipes</h1>
      <div className="container w-25 pb-3 ">
        {recipes.map((recipe, index) => (
          <div key={recipe._id}  className={`card mb-3 animate__animated animate__fadeInDown${
            index === 0 ? " animate__delay-1s" : ""
          }`}>
            <img src={recipe.imageUrl} className="card-img-top" alt={recipe.name} />
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <p className="card-text font-italic">{recipe.instructions}</p>
              <p className="card-text">Cooking Time: {recipe.cookingTime} minutes</p>
              <button
                className="btn btn-success btn-sm"
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Home