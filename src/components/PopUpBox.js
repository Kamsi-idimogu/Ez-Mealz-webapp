import React, { useContext } from 'react';
import sublinks from './data/menu-data';
import { AppContext } from '../AppContext';
import { FaTimes } from 'react-icons/fa';

export default function PopUpBox(){
    const {isSidebarOpen, closeSidebar,isPopUpOpen,closePopUp,popUpMessage,YOffSet} = useContext(AppContext)

    const handleClose = () => {
        if(YOffSet){
            const appElement = document.querySelectorAll('.App');

            appElement.forEach((el) => el.classList.remove('show'))

            window.scrollTo(
                {
                    top: YOffSet,
                    left: 0,
                    behaviour: 'instant'
                });
        }

        closePopUp()
    };

    return(
        <>{isPopUpOpen ? 
        <aside className={isSidebarOpen ? 'sidebar-background show':'sidebar-background'}>  {/* Ingredients Pop-up box */}
            <div className={`sidebar ${isSidebarOpen ? 'show':''}`}>
                <button className="close-btn" onClick={handleClose}>
                    <FaTimes/>
                </button>
                <div className="message-content">
                    <p>{popUpMessage.label}</p>
                    <table className="t">
                        <thead>
                            <tr>
                                <th>Intgerdients</th>
                                <th>Weight (grams)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popUpMessage.ingredients.map((item,index) => (
                                <tr key={index}>
                                    <td>{item.text}</td>
                                    <td>{Number.isInteger(item.weight) ? item.weight : item.weight.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <a href={popUpMessage.url} target='_blank' rel='noopener noreferrer'>See More</a>
                </div>
            </div>
        </aside> 
        : 
        <aside className={isSidebarOpen ? 'sidebar-background show':'sidebar-background'}> {/* Submenu Pop-up box */}
            <div className={`sidebar ${isSidebarOpen ? 'show':''}`}>
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes/>
                </button>
                <div className="sections">
                    {sublinks.map((item,index) => {
                        return (
                            <nav key={index}>
                                <h4>{item.page}</h4>
                                <div className="section" >
                                    {item.links.map((link,index) => {
                                        const {url,icon,label} = link
                                        return (
                                            <a className="item" href={url} key={index}>
                                                {icon}
                                                <p>{label}</p>
                                            </a>
                                        )
                                    })}
                                </div>
                            </nav>
                        )
                    })}
                </div>
            </div>
        </aside>}
        </>
    )
}