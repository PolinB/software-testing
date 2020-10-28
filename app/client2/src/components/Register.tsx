import React from 'react';

import { useForm } from "react-hook-form";

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
}

const Register = () => {
    const { register, errors, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="enterRow">
                <label>First Name</label>
                <input name="firstName" type="text" placeholder="Ivan" id="firstName" ref={register({ required: true, maxLength: 20 })} />
                {errors.firstName && errors.firstName.type === "required" && <span role="alert">This is required</span>}
                {errors.firstName && errors.firstName.type === "maxLength" && <span role="alert">Max length exceeded</span> }
            </div>
            <div className="enterRow">
                <label>Last Name</label>
                <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
            </div>
            <div className="enterRow">
                <label>Age</label>
                <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
            </div>
            <input type="submit" />
        </form>
    );
};

export default Register;