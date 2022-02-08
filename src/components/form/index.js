import React from 'react';
import {Container, Error,
    Title, Input,
    Button, Text,
    TextSmall, Link,
    Content
} from './styles/Form';

const Form = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}



Form.Content = function formContent({children, ...restProps}) {
    return <Content {...restProps}>{children}</Content>
}

Form.Input = function formInput({...restProps}) {
    return <Input {...restProps} />
}

Form.Title = function formTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function formText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function formTextSmall({children, ...restProps}) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function formLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Form.Button = function formButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}



Form.Error = function formError({children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
}


//content
//title
//input
//button
//text

export default Form;