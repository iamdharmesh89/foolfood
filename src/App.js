import "./App.css";
import { useState, useEffect } from "react";
import Recipe from "./components/Recipe";

const App = () => {
  const [search, setSeacrh] = useState("chicken");
  const [data, setData] = useState([]);

  const recipes = async () => {
    const food = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=fc69913c&app_key=d6a5280df4a3332676288b0bf5e1910b`
    );
    const res = await food.json();
    console.log(res.hits);
    return setData(res.hits);
  };
  useEffect(() => {
    recipes();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeacrh(e.target.value);
  };

  return (
    <div className="App">
      
      <form className="form-data" onSubmit={handleSubmit}>
      <h2>Search your favourite food Recipe here..</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSeacrh(e.target.value)}
        ></input>
        <button name="submit">search</button>
      </form>
      <div className="container">
        {data &&
          data.map((recipe) => {
            return (
              <Recipe
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                label={recipe.recipe.healthLabels}
                tag={recipe.recipe.shareAs}
                about={recipe.recipe.ingredientLines}
                key={recipe.recipe.label}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
