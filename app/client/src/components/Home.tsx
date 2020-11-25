import React, {useEffect, useState} from 'react';

const Home = (props: any) => {
    let welcome = (props.user !== null)
        ? <p>Welcome to CrazyCookBook, {props.user.login}</p>
        : <p>Welcome to CrazyCookBook</p>;
    return (
        <div>
            <h1>Home</h1>
            {welcome}
        </div>
    );
}

export default Home;