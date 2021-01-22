import React from 'react';

export const welcome = (user: any) => {
    if (user !== null) {
        return `Welcome to recipe book, ${user.login}`
    } else {
        return "Welcome to recipe book"
    }
}

export const Home = (props: any) => {
    return (
        <div>
            <h1>Home</h1>
            <p style={{padding: 10}} id='welcome'>{welcome(props.user)}</p>
        </div>
    );
}

export default Home;