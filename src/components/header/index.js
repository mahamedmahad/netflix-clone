import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';


import {Background, Container, Logo,ButtonLink} from './styles/header';


export default function Header({bg = true, children, ...restProps}) {

    //if we have background image-- render els render only children!
    return bg ? <Background {...restProps}>{children}</Background> : children

}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}
Header.ButtonLink = function HeaderButtonLink({to,children, ...restProps}) {
    return <ButtonLink {...restProps} to={to}>{children}</ButtonLink>
}