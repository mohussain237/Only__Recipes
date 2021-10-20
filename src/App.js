import React, { useEffect, useState } from "react";

import "./App.css";
import "./index.css";
import Products from "./products";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Biryani");

 const APP_ID = "5f380e2b"
const APP_KEY = "d4be733546f6bdc4eda747d629e5cb08"

  // API calling
  const getRecipes = async () => {
    const res = await fetch(
      ` https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();

    //saving the data 
    setRecipes(data.hits);
    console.log(data.hits);
  };

  // saving the input value 
  function handleChange(e) {
    setSearch(e.target.value);
  }
  // using the input value as a query & setting the query state
  function onSubmitQuery(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  // for every query the page will load with query search

  useEffect(() => {
    getRecipes();
  }, [query]);
 
  
  return (
    <div className="App">
      <form className="search-form" onSubmit={onSubmitQuery}>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipe">
        {recipes.map((food) => (
          <Products
            key={Math.floor(Math.random() * 1000)}
            title={food.recipe.label}
            calories={food.recipe.calories}
            image={food.recipe.image}
            ingredients={food.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
