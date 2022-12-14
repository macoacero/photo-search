import React, { useState } from "react";
import './Menu.scss';
import menu1 from '../images/home.png';
import menu2 from '../images/chat.png';
import menu3 from '../images/bell.png';
import menu4 from '../images/location.png';
import menu5 from '../images/user.png';

function Menu() {
    return (
        <ul className="menu">
            <li>
                <div className="menu1">
                </div>
            </li>
            <li>
                <div className="menu2">
                </div>
            </li>
            <li>
                <div className="menu3">
                </div>
            </li>
            <li>
                <div className="menu4">
                </div>
            </li>
            <li>
                <div className="menu5">
                </div>
            </li>
        </ul>
    );
}

export default Menu;