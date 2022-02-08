import React from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/routes';


export function HeaderContainer({children, btn = true}) {
    return (
        <Header>
            {/**show sign in btn**/}
            {btn ? (
                <Header.Frame>
                    <Header.Logo
                        to={ROUTES.HOME}
                        alt='Netflix'
                        src={'images/logo.svg'}
                    />
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>
                        Sign In
                    </Header.ButtonLink>

                </Header.Frame>
            ) : (
                <Header.Frame>
                    <Header.Logo
                        to={ROUTES.HOME}
                        alt='Netflix'
                        src={'images/logo.svg'}
                    />
                </Header.Frame>
            )}
            {children}
        </Header>
    )
}