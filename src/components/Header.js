import React, { useContext } from 'react';
import {AppContext} from '../AppContext';
import { FaBars } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import placeholder from '../images/eating-food-placeholder.png';
import backgroundImg from '../images/background-pattern-1.jpg';


const Header = () => {
    const {openSubMenu,closeSubMenu,openSidebar} = useContext(AppContext)
    
    function showSubMenu(e){
        const title = e.target.textContent;
        const button = e.target.getBoundingClientRect(); //gets the location of the element that called the function
        
        const centre = (button.right-button.left)/2 + button.left
        const bottom = button.bottom - 7; // want to raise the submenu by 7px
        openSubMenu(title,{centre,bottom})

        if(title === 'Recipes'){
            document.getElementById('recipe').classList.add('rotate')
            document.getElementById('cuisine').classList.remove('rotate')

        }
        else if(title == 'Cuisine'){
            document.getElementById('cuisine').classList.add('rotate')
            document.getElementById('recipe').classList.remove('rotate')
        }
    }

    function handleSubmenu(e){
        if(!e.target.classList.contains('link-btn') || e.target.classList.contains('header-btn')){
            closeSubMenu()
            document.getElementById('recipe').classList.remove('rotate')
            document.getElementById('cuisine').classList.remove('rotate')
        }
    }

    return  (
        <>
            <div className="header-container" onMouseOver={handleSubmenu}>
                <header className="header" onMouseOver={handleSubmenu}>
                    <h1>Ez Mealz</h1>

                    <ul className="header-links">
                    <li>
                        <button className='link-btn' onMouseOver={showSubMenu}>Recipes<BsChevronDown id='recipe' className='link-arrow'/></button> 
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={showSubMenu}>Cuisine<BsChevronDown id='cuisine' className='link-arrow'/></button>
                    </li>
                    <li>
                    <a href='#eat_out'><button onMouseOver={closeSubMenu} className="link-btn header-btn">Eat out</button></a>
                    </li>
                    </ul>

                    <button className='btn nav-btn' onClick={openSidebar}>
                        <FaBars/>
                    </button>
            </header>
            <h3>Welcome to Eazy Mealz, 
                where you can find a wide selection of delicious food recipes and nearby restaurants
            </h3>
        </div>

        <div className="intro-section-container">
            <img src={backgroundImg} alt='bk image' className='intro-side-img left-side'/>
            <section className='intro-section' onMouseOver={handleSubmenu}>
                <img src={placeholder} alt='intro image' className='intro-img'/>
                <h4><i> Our goal is to help people find and try new recipes and discover excellent restaurants in their neighbourhood.</i></h4>
            </section>
            <img src={backgroundImg} alt='bk image' className='intro-side-img right-side'/>
        </div>
    </>
    );

};

export default Header;