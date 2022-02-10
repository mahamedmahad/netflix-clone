import React from 'react';

//styles
import {
    Container,
    Title, List,
    Item, Picture,
    Name
} from './styles/Profiles';

const Profiles = ({children, ...restProps}) => {

    return <Container {...restProps}>{children}</Container>

}

//title
Profiles.Title = function profilesTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

//List
Profiles.List = function profilesList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

//user
Profiles.User = function profilesTitle({children, ...restProps}) {
    return <Item {...restProps} >{children}</Item>
}



//profile picture
Profiles.Picture = function profilesPicture({src,...restProps}) {

    return <Picture {...restProps} src={src ? `/images/users/${src}`: '/images/misc/loading.gif'}/>
}


//name
Profiles.Name = function profilesName({children}) {
    return <Name>{children}</Name>
}

export default Profiles;