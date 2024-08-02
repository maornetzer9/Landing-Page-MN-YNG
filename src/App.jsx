// src/App.js
import React from "react";
import FallingStars from "./UI/FallingStars";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Contact from "./components/Contact";
import FloatingButton from "./components/FloattngButton";
import './App.css';

const App = () => {
    return (
        <>
            <FallingStars />
            <Header/>
            <AboutUs/>
            <OurServices/>
            <Contact/>
            <FloatingButton/>
        </>
    );
};

export default App;