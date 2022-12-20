import React, { useContext } from 'react';
import {AppContext} from '../AppContext';
import { FaBars } from 'react-icons/fa';


const Header = () => {
    const {openSubMenu,closeSubMenu,openSidebar} = useContext(AppContext)
    
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

    return  (
        <>
            <div className="header-container" onMouseOver={handleSubmenu}>
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
                    <a href='#eat_out'><button onMouseOver={closeSubMenu} className="link-btn header-btn">Eat out</button></a>
                    </li>
                    </ul>

                    <button className='btn nav-btn' onClick={openSidebar}>
                        <FaBars/>
                    </button>
            </header>
        </div>

        <section className='intro-section' onMouseOver={handleSubmenu}>
            <h3>Welcome to Eazy Mealz, 
                where you can find a wide selection of delicious food recipes and nearby restaurants
            </h3>

            <h4><i> Our goal is to help people find and try new recipes and discover great restaurants in their area.</i></h4>

        </section>
    </>
    );

};

export default Header;