import React from 'react';
import {
    Container,
    Pane,
    Title,
    SubTitle,
    Image,
    Item,
    Inner
} from "./styles/jumbotron";

export default function Jumbotron({children, direction = 'row', ...restProps}) {
    return (
        <Item  {...restProps} >
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>

    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container {...restProps}>
        {children}
    </Container>
}

Jumbotron.Pane = function JumbotronContainer({children, ...restProps}) {
    return <Pane {...restProps}>
        {children}
    </Pane>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return (
        <Title {...restProps}>
            {children}
        </Title>
    )
}
Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
    return (
        <SubTitle {...restProps}>
            {children}
        </SubTitle>
    )
}
Jumbotron.Image = function JumbotronImage({...restProps}) {
    return (
        <Image {...restProps}/>
    )
}
