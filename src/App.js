import logo from './logo.svg';
import placeholder from './images/eating-food-placeholder.png'
import Axios from 'axios';
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
import Recipe from './components/Recipe';


//get svg logo for website
function App() {
  const APP_ID = "32335955";
  const APP_KEY = "8702c21a7d79d23dfc7783df2d69aac8";
 
  const fetchRecipe = async(searchSring) => {
    const response = 
      await Axios.get(`https://api.edamam.com/search?q=${searchSring}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      UpdateRecipeList(response.data.hits);
    };
const [timeoutid, UpdateTimeoutId] = useState();
const [recipeList, UpdateRecipeList] = useState([]);

const TextChange = (event) => {
  clearTimeout(timeoutid);
  const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
  UpdateTimeoutId(timeout);
};

  return (
    <div className="App">
      <header className="header">
        <h1>Ez Mealz</h1>

        <ul className="header-links">
          <li>Recipes</li> {/*breakfast lunch dinner */}
          <li>Categories</li>
          <li>Eat out</li>
        </ul>
      </header>

      <div className="main">
        <h3>Find the recipe for your favorite dishes</h3>
        <div className="search-box">
          <AiOutlineSearch className='search-icon'/>
          <input placeholder='search recipe' onChange={TextChange}></input>
        </div>
      </div>

      {recipeList.length ? <div className="recipes">{recipeList.map((recipe) => <Recipe content={recipe}/>)}</div> : <img src={placeholder} className='placeholder-img'/>}
      
    </div>
  );
}

export default App;
