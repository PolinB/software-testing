import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";

const App = () => {
    const [user, setUser] = useState({user: null});
    const [isLoading, setIsLoading] = useState(false);

    if (!isLoading) {
        fetch('http://localhost:9000/users/user', {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        }).then(
            res => res.json()
        ).then(result =>{
            // console.log(result);
            setUser(result);
            setIsLoading(true);
        }
        ).catch(_ => {
            setUser({user: null});
            setIsLoading(true);
        });
    }

    const loginFunc = (userIn: any) => {setUser({user: userIn})}
    const logoutFunc = () => {
        fetch('http://localhost:9000/users/logout' , {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        }).then(
            res => res.json()
        ).then( _ =>
            setUser({user: null})
        ).catch(error => {
            setUser({user: null});
            console.log("ERROR");
            console.log(error.toString());
        })
    }

    const isLogin = () => {
        return user.user !== null
    }

    return (
        <BrowserRouter>
            <div>
                <Navigation isLogin={isLogin()} logoutFunc={logoutFunc}/>
                <Switch>
                    <Route path="/" id="home" component={() => <Home user={user.user}/>} exact/>
                    <Route path="/register" id="register" component={Register}/>
                    <Route path="/login" id="login" component={() => <Login loginFunc={loginFunc}/>}/>
                    <Route path="/recipes" id="recipes" component={() => <Recipes user={user.user}/>} exact/>
                    <Route path="/add-recipes" id="add-recipes" component={() => <AddRecipe user={user.user}/>} exact/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
