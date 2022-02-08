import React from 'react';
import {Form} from "../components";


export default function FormContainer(
    {
        email, password, error,
        onHandleSubmit, setEmailAddress,
        setPassword, setError,
        isInvalid
    }) {
    return (
        <Form>

            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>I am an error'</Form.Error>}

            <Form.Content onSubmit={onHandleSubmit} method="POST">
                <Form.Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={({target}) => setEmailAddress(target.value)}
                />

                <Form.Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                    autoComplete={"off"}
                />

                <Form.Button disabled={isInvalid} type={"submit"}>Sign In</Form.Button>
                <Form.Text>
                    New to Netflix ? <Form.Link to={"/signup"}>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>

            </Form.Content>

        </Form>
    )
}