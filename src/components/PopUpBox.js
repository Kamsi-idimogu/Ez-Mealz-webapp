import React, { useContext } from 'react';
import sublinks from './data/menu-data';
import { AppContext } from '../AppContext';
import { FaTimes } from 'react-icons/fa';

export default function PopUpBox(){
    const {isSidebarOpen, closeSidebar,isPopUpOpen,closePopUp,popUpMessage} = useContext(AppContext)
    return(
        <>{isPopUpOpen ? 
        <aside className={isSidebarOpen ? 'sidebar-background show':'sidebar-background'}>
            <div className={`sidebar ${isSidebarOpen ? 'show':''}`}>
                <button className="close-btn" onClick={closePopUp}>
                    <FaTimes/>
                </button>
                <div className="message-content">
                    <p>{popUpMessage.label}</p>
                    <table className="t">
                        <thead>
                            <th>Intgerdients</th>
                            <th>Weight</th>
                        </thead>
                        <tbody>
                            {popUpMessage.ingredients.map((item) => (
                                <tr>
                                    <td>{item.text}</td>
                                    <td>{item.weight}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <a href={popUpMessage.url} target='_blank' rel='noopener noreferrer'>See More</a>
                </div>
            </div>
        </aside> 
        : 
        <aside className={isSidebarOpen ? 'sidebar-background show':'sidebar-background'}>
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