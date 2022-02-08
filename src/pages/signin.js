import React, {useState, useContext} from 'react';

//context
import {FirebaseContext} from "../context/firebase";

//components
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import FormContainer from "../containers/form";


export  default  function Signin() {

    //destructure firebase
    const {firebaseApp} = useContext(FirebaseContext)

    const [emailAddress,setEmailAddress] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');

    //check form input elements are valid!
    //email && password

    const handleSignIn = (e) => {
        e.preventDefault();


        //firebase work


        console.log('Submitted')
    }

    const isInvalid = password === '' || emailAddress === '';

    return (
        <>
        <HeaderContainer btn={false}>
            {/***Form Container! */}
            <FormContainer
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