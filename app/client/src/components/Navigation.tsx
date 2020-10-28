import React from 'react';
import "./Navigation.css"

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="topnav">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/register">Register</NavLink>
        </div>
    );
}

export default Navigation;