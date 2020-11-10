import React, {useState} from 'react';
import "./Navigation.css"

import {NavLink} from 'react-router-dom';

const loginNav = () => {
    return <NavLink className="navlink" to='login'>Login</NavLink>
}

const logoutNav = (handler: any) => {
    return <NavLink className="navlink" to="/" onClick={handler}>Logout</NavLink>
}

const Navigation = (props: any) => {
    let nav
    if (props.isLogin) {
        nav = logoutNav(props.logoutFunc)
    } else {
        nav = loginNav()
    }

    return (
        <div className="topnav">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/register">Register</NavLink>
            {nav}
        </div>
    );
}

export default Navigation;