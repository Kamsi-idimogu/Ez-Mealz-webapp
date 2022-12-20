import React, {useState} from "react";
import sublinks from "./components/data/menu-data";

const AppContext = React.createContext();

function ContextProvider({children}){
    const [isPopUpOpen, setIsPopUpOpen] = useState(false)
    const [popUpMessage, setPopUpMessage] = useState({})
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: []})

    function openSubMenu(text,coordinates){
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    function closeSubMenu(){
        setIsSubmenuOpen(false)
    }
    function openSidebar(){
        setIsSidebarOpen(true)
    }
    function closeSidebar(){
        setIsSidebarOpen(false)
    }
    function openPopUp(content){
        openSidebar()
        setIsPopUpOpen(true)
        setPopUpMessage(content)
    }    
    function closePopUp(){
        closeSidebar()
        setIsPopUpOpen(false)
    }

    return(
        <AppContext.Provider 
            value={{
                isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                closeSidebar,
                openSubMenu,
                closeSubMenu,
                location,
                page,
                openPopUp,
                closePopUp,
                isPopUpOpen,
                popUpMessage
            }}
        >
            {children}
        </AppContext.Provider>
    )
} 

export {AppContext,ContextProvider}