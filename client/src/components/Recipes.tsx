import React, {useState} from "react";
import './Recipes.css'

const recipesToHtml = (recipes: any) => {
    return recipes.map((d: any) => <div className="recipe" key={d.name}>
        <div className="recipe-name">{d.name}</div>
        <div className="recipe-block">Ingredients:</div>
        <div className="recipe-value">{d.ingredients}</div>
        <div className="recipe-block">Instruction:</div>
        <div className="recipe-value">{d.instruction}</div>
    </div>)
}

export const Recipes = (props: any) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    if (!isLoading && props.user != null) {
        fetch('http://localhost:8082/recipes/recipes', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({login: props.user.login})
        }).then(res =>
            res.json()
        ).then(result => {
            setRecipes(result);
            setIsLoading(true);
        }).catch(error => {
            console.log("ERROR");
            console.log(error.toString());
            setIsLoading(true);
        })
    }

    return (
        <div>
            <h1>Recipes</h1>
            <div id="all-recipes">
                {isLoading && recipesToHtml(recipes)}
            </div>
        </div>
    );
}

export default Recipes;