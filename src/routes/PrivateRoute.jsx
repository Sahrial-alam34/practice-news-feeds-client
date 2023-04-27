/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <h2>Loadddddddddddddinggggggggggggggg................</h2>
    }
    if(user){
        return children;
    }

    PrivateRoute.propTypes = {
        children: PropTypes.node.isRequired,
      };
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;