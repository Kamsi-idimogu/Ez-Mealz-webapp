import React, { useContext } from "react";
import Restaurant from "./components/Restaurants";
import Header from "./components/Header";
import Submenu from "./components/Submenu";
import PopUpBox from "./components/PopUpBox";
import Recipe from "./components/Recipes";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { AppContext } from "./AppContext";

const App = () => {
  const {isSidebarOpen} = useContext(AppContext)

  return (
    <div className={isSidebarOpen ? 'App show':'App'}>
      <Header />
      <Submenu />
      <PopUpBox />
      <Recipe />
      <Reviews />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
