import React, {useState} from 'react';

//containers
import SignUpContainer from "../containers/signup";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";


//Routes
import {useNavigate} from "react-router-dom";
import * as ROUTES from '../constants/routes'

import {auth} from '../lib/firebase.prod'

export default function Signup() {
    let navigate = useNavigate();

    const [userName, setUserName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const isInvalid = userName === '' || password === '' || emailAddress === '';


    /*
     const randomImage = () => {
         const random = Math.floor(Math.random() * 5) + 1

         const pic = `/images/users/${random}.png`;


         return pic

     }*/

    //console.log(randomImage())


    //register function
    const handleRegistration = (e) => {
        e.preventDefault()

        //firebase stuff
        auth.createUserWithEmailAndPassword(emailAddress, password)
            .then((res) => {
                res.user
                    .updateProfile({
                        displayName: userName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    }).then(() => {
                    navigate(ROUTES.BROWSE)
                })
                console.log(res.user)
            })
            .catch((err) => {
                setUserName('')
                setEmailAddress('')
                setPassword('')
                setError(err.message)
            })


    }

    return (
        <>
            <HeaderContainer btn={false}>


                <SignUpContainer
                    onSubmit={handleRegistration}
                    name={userName}
                    email={emailAddress}
                    password={password}
                    setUserName={setUserName}
                    setEmailAddress={setEmailAddress}
                    setPassword={setPassword}
                    error={error}
                    isInvalid={isInvalid}

                />

            </HeaderContainer>

            <FooterContainer/>

        </>
    )
}