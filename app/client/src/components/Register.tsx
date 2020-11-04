import React from 'react';

import { useForm } from "react-hook-form";
import "./Register.css"

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
}

const Register = () => {
    const { register, errors, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);

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
                    <label>Age</label>
                    <input name="age" type="number" placeholder="42" step="1" ref={register({ min: 10, max: 120 })} />
                    {errors.age && errors.age.type === "min"
                    && <div className="error" role="alert">Min age is 10</div> }
                    {errors.age && errors.age.type === "max"
                    && <div className="error" role="alert">Max age is 120</div> }
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Register;