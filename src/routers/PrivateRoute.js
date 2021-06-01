import React from 'react';
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({  isAuthenticated, component: Component,  ...rest }) => {
    
    localStorage.setItem("last_path",rest.location.pathname);
    
    return ( 
        <Route {...rest}
            component={ (props)=> (
                    (isAuthenticated)
                    ? ( <Component {...props} /> )
                    : ( <Redirect  to="/login" /> )
                )
            }
        />
    )
}
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}