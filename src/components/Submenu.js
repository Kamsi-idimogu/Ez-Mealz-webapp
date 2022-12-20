import React, { useState, useContext, useEffect, useRef } from 'react';
import {AppContext} from '../AppContext';

const Submenu = () => {
    const {isSubmenuOpen,location,page: {links}} = useContext(AppContext)
    const [columns, setColums] = useState('col-2')
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

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            <div className={`links ${columns}`}>
                {links.map((link, index) => {
                    const {label, icon, url} = link
                    return <a href={url} target='_blank' rel='noopener noreferrer' key={index}>{icon} {label}</a>
                })}
            </div>
        </aside>
    );

};

export default Submenu;