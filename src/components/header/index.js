import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';

//styles
import {
    Background,
    Container, Logo,
    ButtonLink, Feature,
    Text, FeatureText,
    TextLink, Group,
    Picture, Profile,
    DropDown, SignOut,
    Search, SearchIcon,
    SearchInput, PlayButton
} from './styles/header';


export default function Header({bg = true, children, ...restProps}) {

    //if we have background image-- render els render only children!
    return bg ? <Background {...restProps}>{children}</Background> : children

}

//feature
Header.Feature = function headerFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureText = function headerFeatureText({children, ...restProps}) {
    return <FeatureText {...restProps}>{children}</FeatureText>
}


//header text
Header.Text = function headerText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}


Header.TextLink = function headerTextLink({children, ...restProps}) {
    return <TextLink {...restProps}>{children}</TextLink>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.DropDown = function headerDropDown({children, ...restProps}) {
    return <DropDown {...restProps}>{children}</DropDown>
}

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({src, ...restProps}) {
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.SignOut = function headerSignOut({children, ...restProps}) {
    return <SignOut {...restProps}>{children}</SignOut>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false)
    return (
        <Search
            {...restProps}

        >
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src={"/images/icons/search.png"} alt={"search"}/>
            </SearchIcon>

            <SearchInput
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
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
Header.ButtonLink = function HeaderButtonLink({to, children, ...restProps}) {
    return <ButtonLink {...restProps} to={to}>{children}</ButtonLink>
}