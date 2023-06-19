import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from "./layout/navBar";
import Home from "./pages/home";
import SavedRecipe from "./pages/savedRecipe";
import CreateRecipe from "./pages/createRecipe";
import Auth from "./pages/auth";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/create-recipe" element={<CreateRecipe/>} />
        <Route path="/saved-recipe" element={<SavedRecipe/>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App