import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/register" component={Register}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
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
