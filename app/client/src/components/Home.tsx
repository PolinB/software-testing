import React from 'react';

export const welcome = (user: any) => {
    if (user !== null) {
        return `Welcome to CrazyCookBook, ${user.login}`
    } else {
        return "Welcome to CrazyCookBook"
    }
}

export const Home = (props: any) => {
    return (
        <div>
            <h1>Home</h1>
            <p>{welcome(props.user)}</p>
        </div>
    );
}

export default Home;