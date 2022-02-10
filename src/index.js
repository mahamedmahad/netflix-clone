import React from 'react';
import {render} from 'react-dom';
import 'normalize.css';
import App from './app';
import {GlobalStyles} from './global-styles';

import { firebaseApp, auth, db } from "./lib/firebase.prod";

//context
import {FirebaseContext} from './context/firebase';



const value = {firebaseApp, auth, db}

render(
    <>
        <FirebaseContext.Provider value={value}>
            <GlobalStyles/>
            <App/>
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')

    );
