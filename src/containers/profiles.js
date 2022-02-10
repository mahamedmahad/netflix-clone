import React from 'react';

//Routes
import * as ROUTES from '../constants/routes'

//hooks
import {useAuthListener} from "../hooks";

//components
import {Header, Profiles} from '../components';

//images & logos
import logo from '../logo.svg'

const SelectProfileContainer = ({user, setProfile}) => {


    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt={'Netflix'}/>
                </Header.Frame>
            </Header>

            {/***Profile Component!*/}
            <Profiles>
                <Profiles.Title>Who's Watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    })}>
                        <Profiles.Picture src={user.photoURL} alt={user.displayName}/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>

        </>
    )
}
export default SelectProfileContainer;