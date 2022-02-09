import React from 'react';

import {Route, Navigate, useLocation} from 'react-router-dom';


//is user Logged-in
export function IsUserRedirect({user, loggedInPath, children}) {

    if (user) {
        //console.log("User is logged in Already: from IsUserRedirect:", user);
        return <Navigate to={loggedInPath} replace/>
    }
    if (!user) {

        return children
    }
    return null;


}


//protected route
export function ProtectedRoute({children, user }) {
    let location = useLocation()


        if (user) {
            //console.log("User has access to this protected url: from ProtectedRoute:");
            return children;
        }
        if (!user) {
            //console.log('Empty user: u have no access to this protected url:', location)
            return <Navigate
                to={{
                    pathname: '/signin',
                    state: {from: location}
                }}
                replace

            />
        }


}