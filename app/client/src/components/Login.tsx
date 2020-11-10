import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import "./Register.css"

interface IFormInput {
    login: string;
}

const Login = (props: any) => {
    const { register, errors, handleSubmit } = useForm<IFormInput>();
    const [errorss, setErrors] = useState(errors);
    const history = useHistory();
    const onSubmit = (data: IFormInput) => {
        fetch('http://localhost:9000/users/login' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then( res =>
            res.json()
        ).then(result => {
            if (result.body === "OK") {
                props.loginFunc();
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
                    <label>Login</label>
                    <input name="login" type="text" placeholder="Example" id="login"
                           ref={register({ required: true})} />
                    {errors.login && errors.login.type === "required"
                    && <div className="error" role="alert">This is required</div>}
                    {errorss.login && errorss.login.type === "outErr"
                    && <div className="error" role="alert">{errorss.login.message}</div>}
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Login;