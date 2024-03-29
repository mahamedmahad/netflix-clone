import React from 'react';
import { Container, SubTitle, Title } from "./style/feature.js";


export  default  function Feature({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Feature.Title = function FeatureTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Feature.SubTitle = function FeatureSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}