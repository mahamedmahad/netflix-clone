import React from 'react';
import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import {
    Home, Signin, Signup, Browse, Profile, NotFound
} from "./pages";

import {IsUserRedirect, ProtectedRoute} from "./helpers/route";

export default function App() {

    const user = null;

    return (
        <Router>
            <Routes>

                {/****User Redirect url****/}
                <Route
                    path={ROUTES.SIGN_IN}
                    element={
                        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                            <Signin/>
                        </IsUserRedirect>
                    }
                />


                <Route
                    path={ROUTES.SIGN_UP}
                    element={
                        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                            <Signup/>
                        </IsUserRedirect>
                    }
                />

                {/***Protected Route- Only user have access to it!**/}
                <Route
                     path={ROUTES.BROWSE}
                    element={
                        <ProtectedRoute
                            user={user}
                        >
                            <Browse/>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path={ROUTES.PROFILE}
                    element={
                        <ProtectedRoute
                            user={user}
                        >
                            <Profile/>
                        </ProtectedRoute>
                    }
                />

                <Route
                     path={ROUTES.HOME}
                    element={
                        <IsUserRedirect
                            user={user}
                            loggedInPath={ROUTES.BROWSE}
                        >
                            <Home/>
                        </IsUserRedirect>
                    }
                     exact
                />
                <Route
                     path={ROUTES.NOTFOUND}
                    element={<NotFound/>}
                />

            </Routes>

        </Router>
    );
}


