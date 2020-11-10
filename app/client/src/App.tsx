import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login'

const App = () => {
    const [isLogin, setIsLogin] = useState(false);

    const loginFunc = () => setIsLogin(true)
    const logoutFunc = () => setIsLogin(false)

    return (
        <BrowserRouter>
            <div>
                <Navigation isLogin={isLogin} logoutFunc={logoutFunc}/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={() => <Login loginFunc={loginFunc}/>}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

class SomeService {
  static getAllData() {
    fetch("http://localhost:9000/users").then( res =>
        res.json()
    ).then(result => {
        console.log(result);
    }).catch(error => {
        console.log("ERROR");
        console.log(error.toString());
    })
  }
}

export default App;
