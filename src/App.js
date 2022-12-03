import logo from './logo.svg';
import React, {useContext, useEffect, useRef} from 'react';
import placeholder from './images/eating-food-placeholder.png'
import Axios from 'axios';
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
import Recipe from './components/Recipe';
import Reviews from './components/Reviews';
import Restaurant from './components/Restaurant';
import {AppContext} from './AppContext';
import { FaBars } from "react-icons/fa";
import PopUpBox from './components/PopUpBox';


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
const [fund, setFund] = useState(0);
var found = 0;

const TextChange = (event) => {
  clearTimeout(timeoutid);
  const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
  UpdateTimeoutId(timeout);
  // if( event.target.value)
    // setFund(1)
  // else
  //   setFund(0)
  
};

const {openSidebar, isSubmenuOpen ,openSubMenu,closeSubMenu,location,page: {page,links}} = useContext(AppContext)

// const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
// const [location, setLocation] = useState({})
// const [page, setPage] = useState({ page: '', links: []})

function showSubMenu(e){
  const title = e.target.textContent;
  const button = e.target.getBoundingClientRect(); //gets the location of the element that called the function
  
  const centre = (button.right-button.left)/2 + button.left
  const bottom = button.bottom - 7; // want to raise the submenu by 7px
  openSubMenu(title,{centre,bottom})
}
function handleSubmenu(e){
  if(!e.target.classList.contains('link-btn'))
      closeSubMenu()
}

/*----------------------------*/
const [columns, setColums] = useState('col-2')
// const {
//     isSubmenuOpen, 
//     location, 
//     page: {page, links} //page is an object that is destructed to 'page' and 'links'  (Nested destructuring)
// } = useContext(AppContext)
const container = useRef(null)

useEffect(() =>{
    setColums('col-2')
    const menu = container.current
    const {centre,bottom} = location
    menu.style.left = `${centre}px`
    menu.style.top = `${bottom}px`

    if(links.length === 3)
        setColums('col-3')
    if(links.length > 3)
        setColums('col-4')
    
},[location,links])
/*----------------------------*/

const {isSidebarOpen, closeSidebar} = useContext(AppContext)

  return (
    <div className={isSidebarOpen ? 'App show':'App'} >
      <header className="header" onMouseOver={handleSubmenu}>
        <h1>Ez Mealz</h1>

        <ul className="header-links">
          <li>
              <button className='link-btn' onMouseOver={showSubMenu}>Recipes</button> 
          </li>
          <li>
            <button className="link-btn" onMouseOver={showSubMenu}>Cuisine</button>
          </li>
          <li>
          <a href='#eat_out'><button className="link-btn header-btn">Eat out</button></a>
          </li>
        </ul>

        <button className='btn nav-btn' onClick={openSidebar}>
          <FaBars/>
        </button>
      </header>

      <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            {/* <h4>{page}</h4> */}
            <div className={`links ${columns}`}>
                {links.map((link, index) => {
                    const {label, icon, url} = link
                    return <a href={url} target='_blank' rel='noopener noreferrer' key={index}>{icon} {label}</a>
                })}
            </div>
      </aside>
      
      <PopUpBox/>

      <div className="main" onMouseOver={handleSubmenu}>
        <h3>Find the recipe for your favorite dishes</h3>
        <div className="search-box">
          <AiOutlineSearch className='search-icon'/>
          <input placeholder='search recipe' onChange={TextChange}></input>
        </div>
      </div>

      {recipeList.length ? <div className="recipes">{recipeList.map((recipe) => <Recipe content={recipe}/>)}</div> /*: fund == 1 ? <div>not found</div> */: <img src={placeholder} className='placeholder-img'/>}
      <p>hi people tried the recipe here are some reviews</p>

      <Reviews/>
      
      <h1 id='eat_out'>bottom</h1>

      <Restaurant/>
      
    </div>
  );
}

export default App;
