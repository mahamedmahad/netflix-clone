import React, {useContext, useEffect, useState} from 'react';


//components
import {Header, Loading} from '../components'
import SelectProfileContainer from './profiles'


//context
import {FirebaseContext} from '../context/firebase';
import * as ROUTES from "../constants/routes";


export default function BrowseContainer({slides}) {
    //profile states
    const [profile, setProfile] = useState({})

    //loading
    const [loading, setLoading] = useState(true)

    //authentication
    //get the user from auth
    const {auth} = useContext(FirebaseContext)
    const user = auth.currentUser || {};


    useEffect(() => {
        //console.log('Profile:', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])


    /**Check if their is a display Name!*/
    return profile.displayName ? (
            <>  {/**show the spinner before the content-then release body content **/}
                {loading ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/>}


                {/**Content is loaded!**/}
                {/****Header component*/}

                <Header src={"joker1"} dontShowOnSmallViewPort>

                    <Header.Frame>
                        {/**left side*/}
                        <Header.Group>
                            <Header.Logo
                                to={ROUTES.HOME}
                                alt='Netflix'
                                src={'images/logo.svg'}
                            />
                            <Header.TextLink>Series</Header.TextLink>
                            <Header.TextLink>Films</Header.TextLink>
                        </Header.Group>

                        {/***Right side*/}
                        <Header.Group>
                            {/**Search**/}
                            {/**Profile **/}
                            <Header.Profile>
                                <Header.Picture src={user.photoURL}/>
                                {/*DropDown**/}
                                <Header.DropDown>
                                    <Header.Group>
                                        <Header.Picture src={user.photoURL}/>
                                        <Header.TextLink>{user.displayName}</Header.TextLink>
                                    </Header.Group>

                                    {/****Sign out**/}
                                    <Header.Group>
                                        <Header.SignOut onClick={()=> auth.signOut()}>Sign out</Header.SignOut>
                                    </Header.Group>


                                </Header.DropDown>
                            </Header.Profile>

                        </Header.Group>

                    </Header.Frame>


                    <Header.Feature>
                        <Header.FeatureText>Watch Joker Now</Header.FeatureText>
                        <Header.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa ante, efficitur vitae
                            viverra at, laoreet id nunc. Suspendisse maximus odio et lorem accumsan, eu ultrices nunc
                            feugiat. Sed ut justo at velit congue blandit rhoncus a lacus. Phasellus varius velit libero,
                            non pulvinar augue cursus non. Nulla sed libero vestibulum, tincidunt risus sit amet, sodales
                            lorem.
                        </Header.Text>
                    </Header.Feature>
                </Header>
            </>
        )
        :
        (
            <SelectProfileContainer user={user} setProfile={setProfile}/>

        );

}
