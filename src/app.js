import React from 'react';
import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import {
    Home, Signin, Signup, Browse, Profile,NotFound
} from "./pages";


export default function App() {
    return (<Router>
        <Routes>
            {/***route6-- switch is now called Route******/}
            <Route
                exact path={ROUTES.SIGN_IN}
                element={<Signin/>}
            />

            <Route
                exact path={ROUTES.SIGN_UP}
                element={<Signup/>}
            />

            <Route
                exact path={ROUTES.BROWSE}
                element={<Browse/>}
            />

            <Route
                exact path={ROUTES.PROFILE}
                element={<Profile/>}
            />

            <Route
                exact path={ROUTES.HOME}
                element={<Home/>}
            />
            <Route
                exact path={ROUTES.NOTFOUND}
                element={<NotFound/>}
            />

        </Routes>

    </Router>);
}


