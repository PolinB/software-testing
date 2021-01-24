import React from 'react';
import "./Navigation.css";

import {NavLink} from 'react-router-dom';

const loginNav = () => {
    return <NavLink id="login-navlink" className="navlink" to='/login'>Login</NavLink>
}

const logoutNav = (handler: any) => {
    return <NavLink id="logout-navlink" className="navlink" to="/" onClick={handler}>Logout</NavLink>
}

const Navigation = (props: any) => {
    return (
        <div className="topnav">
            <NavLink className="navlink" to="/">Home</NavLink>
            {!props.isLogin && <NavLink className="navlink" to="/register">Register</NavLink>}
            {props.isLogin && <NavLink className="navlink" to="/recipes">Recipes</NavLink>}
            {props.isLogin && <NavLink className="navlink" to="/add-recipes">Add recipe</NavLink>}
            {props.isLogin ? logoutNav(props.logoutFunc) : loginNav()}
        </div>
    );
}

export default Navigation;