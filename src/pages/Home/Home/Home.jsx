/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2>Hello {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;