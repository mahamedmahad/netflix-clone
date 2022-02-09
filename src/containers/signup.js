import React from 'react';
import {Form} from "../components";


export default function SignUpContainer(props) {

    const {
        name, email,
        password, setUserName,
        setEmailAddress,
        setPassword,
        onSubmit,
        error, isInvalid
    } = props

    return (
        <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}


            <Form.Content method="POST" onSubmit={onSubmit}>
                <Form.Input
                    type={"text"}
                    placeholder="First Name"
                    value={name}
                    onChange={({target}) => setUserName(target.value)}
                />
                <Form.Input
                    type={"email"}
                    placeholder="Email"
                    value={email}
                    onChange={({target}) => setEmailAddress(target.value)}
                />
                <Form.Input
                    type={"password"}
                    placeholder="Password"
                    autoComplete={"off"}
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                />

                <Form.Button disabled={isInvalid}>Sign up</Form.Button>
                <Form.Text>
                    Have a netflix account ? <Form.Link to={"/signin"}>Sign in now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            </Form.Content>

        </Form>
    )
}