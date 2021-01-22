import React, {useState} from 'react';

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./Register.css"

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
    login: string;
}

const Register = () => {
    const { register, errors, handleSubmit } = useForm<IFormInput>();
    const [errorss, setErrors] = useState(errors);
    const history = useHistory();
    const onSubmit = (data: IFormInput) => {
        fetch('http://localhost:9000/users/register' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then( res =>
            res.json()
        ).then(result => {
            if (result.body === "OK") {
                history.push("/");
            } else {
                setErrors({"login": {
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
        <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="enterRow">
                    <label>First Name</label>
                    <input name="firstName" type="text" placeholder="Ivan" id="firstName"
                           ref={register({ required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                    {errors.firstName && errors.firstName.type === "required"
                        && <div className="error" role="alert">This is required</div>}
                    {errors.firstName && errors.firstName.type === "maxLength"
                        && <div className="error" role="alert">Max length exceeded</div> }
                    {errors.firstName && errors.firstName.type === "pattern"
                        && <div className="error" role="alert">Use only Latin letters</div> }
                </div>
                <div className="enterRow">
                    <label>Last Name</label>
                    <input name="lastName" type="text" placeholder="Ivanov" id="lastName"
                           ref={register({ required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
                    {errors.lastName && errors.lastName.type === "required"
                    && <div className="error" role="alert">This is required</div>}
                    {errors.lastName && errors.lastName.type === "maxLength"
                    && <div className="error" role="alert">Max length exceeded</div> }
                    {errors.lastName && errors.lastName.type === "pattern"
                    && <div className="error" role="alert">Use only Latin letters</div> }
                </div>
                <div className="enterRow">
                    <label>Login</label>
                    <input name="login" type="text" placeholder="Example" id="login"
                           ref={register({ required: true})} />
                    {errors.login && errors.login.type === "required"
                    && <div className="error" role="alert">This is required</div>}
                    {errorss.login && errorss.login.type === "outErr"
                    && <div className="error" role="alert">{errorss.login.message}</div>}
                </div>
                <div className="enterRow">
                    <label>Age</label>
                    <input name="age" id="age" type="number" placeholder="42" step="1" ref={register({ min: 10, max: 120 })} />
                    {errors.age && errors.age.type === "min"
                    && <div className="error" role="alert">Min age is 10</div> }
                    {errors.age && errors.age.type === "max"
                    && <div className="error" role="alert">Max age is 120</div> }
                </div>
                <input id="register-submit" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Register;