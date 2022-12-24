import React, { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import { AppContext } from '../AppContext';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxDragHandleDots2 } from 'react-icons/rx';
import placeholder from '../images/eating-food-placeholder.png';
import featured from './data/featured-data.js';

const Recipe = () => {
    const APP_ID = "32335955";
    const APP_KEY = "8702c21a7d79d23dfc7783df2d69aac8";

    const [timeoutid, UpdateTimeoutId] = useState();
    const [recipeList, UpdateRecipeList] = useState([]);   
    const {openPopUp,updateYOffSet} = useContext(AppContext)

    const [isLoaded, setIsloaded] = useState(false);

    const fetchRecipe = async(searchSring) => {
        const response = 
          await Axios.get(`https://api.edamam.com/search?q=${searchSring}&app_id=${APP_ID}&app_key=${APP_KEY}`);
          UpdateRecipeList(response.data.hits);
    };

    const TextChange = (event) => {
        clearTimeout(timeoutid);
        const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
        UpdateTimeoutId(timeout);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }
            else{
                entry.target.classList.remove('visible');
            }
        });
    });

    const handlePopUp = (content) => {
        openPopUp(content)

        updateYOffSet(window.scrollY);

        const appElement = document.querySelectorAll('.App');

        appElement.forEach((e) => e.classList.add('show'))
        
    }

    const hiddenElements = document.querySelectorAll('.hidden');
    
    if(isLoaded){
        hiddenElements.forEach((ele) => observer.observe(ele))
    }
    useEffect(() => {
        const handleLoad = event => {
            setIsloaded(true)
        };
        
        const element = window;
        
        element.addEventListener('load', handleLoad);
        
        return () => {
            element.removeEventListener('load', handleLoad);
        };
        }
    ,[]);

    let isLeft = true;
    
    return(
        <>
            <div className="main">
                <h3>Browse our selection of recipes and restaurants, or use our search bar to find something specific.</h3>
                <div className="featured-box-background">
                <section className="featured-box">
                    {featured.map((item) => {
                        if(isLeft){
                            isLeft = false;
                            return(
                                <div className='featured-card left hidden' key={item.id}>
                                    <div className='featured-data'>
                                        <RxDragHandleDots2 className='featured-icon-left' />
                                        <a href={item.weburl} target='_blank' rel='noopener noreferrer'>
                                            <img src={item.image} alt='featured image'/>
                                        </a>
                                        <div className='featured-info'>
                                            <h2>{item.title}</h2>
                                            {item.id === 1 ? 
                                                <div className='featured-info-desc'> 
                                                    <p className='short-desc'>{item.short_description}</p>
                                                    <p className='long-desc'>{item.description}</p> 
                                                </div>
                                                : 
                                                <p>{item.description}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="strip-left"/>
                                </div>
                            )
                        }
                        else{
                            isLeft = true;
                            return(
                                <div className='featured-card right hidden' key={item.id}>
                                    <div className='featured-data'>
                                        <RxDragHandleDots2 className='featured-icon-right' />
                                        <a href={item.weburl} target='_blank' rel='noopener noreferrer'>
                                            <img src={item.image} alt='featured image'/>
                                        </a>
                                        <div className="featured-info">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="strip-right"/>
                                </div>
                            )
                        }
                    })}
                </section>
                </div>

                <h3>Find the recipe for your favorite dishes</h3>
                <div className="search-box">
                <AiOutlineSearch className='search-icon'/>
                <input placeholder='search recipe' onChange={TextChange}></input>
                </div>
            </div>

            {
                recipeList.length ? 
                    <div className="recipes">{recipeList.map((item,index) => {
                        return (
                            <div className="recipe-container" key={index}>
                            <img alt='Meal image' src={item.recipe.image} className='recipe-img'/>
                            <h3>{item.recipe.label}</h3>
                            <div className="recipe-btns">
                              <button className="recipe-ingredient-btn" onClick={() => handlePopUp(item.recipe)}>Ingredient</button>
                              <button className="recipe-instruction-btn" onClick={() => window.open(item.recipe.url)}>Instructions</button>
                            </div>
                          </div>
                        );
                    })}</div> 
                    : 
                    <img src={placeholder} className='placeholder-img'/>
            }
        </> 
    )

};

export default Recipe;