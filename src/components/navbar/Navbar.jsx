import React, { useState } from "react";
import './navbar.scss'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">

                <div className="left">
                    <img src="https://i.ibb.co/C0bQC5N/netflix.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>

                <div className="right">
                    
                    {/* SEARCH ICON */}
                    <i className="ri-search-line icon"></i>
                    <span>KID</span>

                    {/* NOTIFICATION ICON */}
                    <i className="ri-notification-fill icon"></i>
    
                    {/* IMAGE AND ARROW ICON */}
                    <img src="https://i.ibb.co/921NK4T/1682414628849.jpg" alt="" />
                    <div className="profile">
                        <i className="ri-arrow-down-s-fill icon"></i>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;