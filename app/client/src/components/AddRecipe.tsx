import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import "./Register.css"

interface IFormInput {
    name: string;
    ingredients: string;
    instruction: string;
    login: string;
}

const addRecipeForm = (action: any, errorss: any, register: any, errors: any) => {
    return <div className="register-form">
        <form onSubmit={action}>
            <div className="enterRow">
                <label>Name</label>
                <input name="name" type="text" placeholder="Pizza" id="name"
                       ref={register({ required: true})} />
                {errors.name && errors.name.type === "required"
                && <div className="error" role="alert">This is required</div>}
                {errorss.name && errorss.name.type === "outErr"
                && <div className="error" role="alert">{errorss.name.message}</div>}
            </div>
            <div className="enterRow">
                <label>Ingredients</label>
                <textarea name="ingredients"  id="ingredients" ref={register({ required: true})} />
                {errors.ingredients && errors.ingredients.type === "required"
                && <div className="error" role="alert">This is required</div>}
                {errorss.ingredients && errorss.ingredients.type === "outErr"
                && <div className="error" role="alert">{errorss.ingredients.message}</div>}
            </div>
            <div className="enterRow">
                <label>Instruction</label>
                <textarea name="instruction" id="instruction" ref={register({ required: true})} />
                {errors.instruction && errors.instruction.type === "required"
                && <div className="error" role="alert">This is required</div>}
                {errorss.instruction && errorss.instruction.type === "outErr"
                && <div className="error" role="alert">{errorss.instruction.message}</div>}
            </div>
            <input type="submit" value="Submit"/>
        </form>
    </div>
}

const AddRecipe = (props: any) => {
    const { register, errors, handleSubmit } = useForm<IFormInput>();
    const [errorss, setErrors] = useState(errors);
    const history = useHistory();
    const onSubmit = (data: IFormInput) => {
        data.login = props.user.login;

        fetch('http://localhost:9000/recipes/add-recipe' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res =>
            res.json()
        ).then(result => {
            if (result.body === "OK") {
                history.push("/recipes");
            } else {
                setErrors({"name": {
                        type: "outErr",
                        message: result.body
                    }})
            }
        }).catch(error => {
            console.log("ERROR");
            console.log(error.toString());
        })
    }
    return (
        props.user && addRecipeForm(handleSubmit(onSubmit), errorss, register, errors)
    );
}

export default AddRecipe;