import React from "react";
import { useState, useEffect } from "react";
import './header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
           
        if (winScroll > heightToHideFrom) { 
           !isScrolled && 
             setIsScrolled(true);
        } else {
             setIsScrolled(false);
        }  
    };

    return (
        <div className="header">
            <h1>Wordts</h1>
            {isScrolled ? null : <p className="tag">like that <span><em>other</em></span> word guessing game, but a little bit cuter</p>}
        </div>
    )
};

export default Header;