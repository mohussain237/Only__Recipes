import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./index.css";
import Products from "./products";

function App() {
  const APP_ID = "5f380e2b";
  const APP_KEY = "d4be733546f6bdc4eda747d629e5cb08";
  const URL = ` https://api.edamam.com/search?q=biryani&app_id=${APP_ID}&app_key=${APP_KEY} `;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("mutton biryani");

  const getRecipes = async () => {
    const res = await fetch(
      ` https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function onSubmitQuery(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

  useEffect(() => {
    getRecipes();
  
  }, [query]);

  return (
    <div>
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
      {recipes.map((food) => (
        <Products
          key={Math.floor(Math.random()*1000)}
          title={food.recipe.label}
          calories={food.recipe.calories}
          image={food.recipe.image}
          ingredients= {food.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
