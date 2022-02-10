import React, {useState, useContext} from 'react';

//context
//import {FirebaseContext} from "../context/firebase";
import {auth} from '../lib/firebase.prod'
//components
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import SignInContainer from "../containers/signin";

//Routes
import {useNavigate} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import {BROWSE} from "../constants/routes";

export default function Signin() {

    let navigate = useNavigate()

    //destructure firebase
    //const {firebaseApp} = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //check form input elements are valid!
    //email && password

    const handleSignIn = (e) => {
        e.preventDefault();


        //firebase work
        auth.signInWithEmailAndPassword(emailAddress, password)
            .then(()=> {
                //push to the browse page!
                navigate(ROUTES.BROWSE)
            })
            .catch((err)=> {
                setEmailAddress('')
                setPassword('')
                setError(err.message);
            })

        //console.log('Submitted')
    }

    const isInvalid = password === '' || emailAddress === '';

    return (
        <>
            <HeaderContainer btn={false}>
                {/***Form Container! */}
                <SignInContainer
                    email={emailAddress}
                    password={password}
                    error={error}
                    onHandleSubmit={handleSignIn}
                    setEmailAddress={setEmailAddress}
                    setPassword={setPassword}
                    setError={setError}
                    isInvalid={isInvalid}
                />

            </HeaderContainer>

            <FooterContainer/>

        </>

    )
}