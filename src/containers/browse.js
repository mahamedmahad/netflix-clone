import React, {useContext, useEffect, useState} from 'react';


//components
import {Header, Loading, Card} from '../components'
import SelectProfileContainer from './profiles'


//context
import {FirebaseContext} from '../context/firebase';
import * as ROUTES from "../constants/routes";
import {FooterContainer} from "./footer";


export default function BrowseContainer({slides}) {
    const [category, setCategory] = useState('series')
    //profile states
    const [profile, setProfile] = useState({})
    //search states
    const [searchTerm, setSearchTerm] = useState('')
    //loading
    const [loading, setLoading] = useState(true)

    const [slideRows, setSlideRows] = useState([])

    //authentication
    //get the user from auth
    const {auth} = useContext(FirebaseContext)
    const user = auth.currentUser || {};


    /* This is a React Hook that runs the code inside the brackets when the profile state changes. */
    useEffect(() => {
        //console.log('Profile:', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])


    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])


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
                            <Header.TextLink
                                active={category === 'series' ? 'true' : 'false'}
                                onClick={() => setCategory('series')}
                            >
                                Series
                            </Header.TextLink>

                            <Header.TextLink
                                active={category === 'films' ? 'true' : 'false'}
                                onClick={() => setCategory('films')}
                            >Films
                            </Header.TextLink>
                        </Header.Group>

                        {/***Right side*/}
                        <Header.Group>
                            {/**Search**/}
                            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
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
                                        <Header.SignOut onClick={() => auth.signOut()}>Sign out</Header.SignOut>
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

                        <Header.PlayButton>Play</Header.PlayButton>

                    </Header.Feature>
                </Header>


                {/***card***/}

                <Card.Group margin={"30px 0"}>
                    {slideRows.map((slideItem) => (
                        <Card key={`${category}-${slideItem.title.toLowerCase()}`}>

                            <Card.Title>{slideItem.title}</Card.Title>

                            <Card.Entities>
                                {slideItem.data.map((item) => (
                                    <Card.Item key={item.docId} item={item}>
                                        <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg `}/>
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                ))}
                            </Card.Entities>


                            <Card.Feature category={category}>
                                {/****

                                 <Player>
                                 <Player.Button />
                                 <Player.Video src={"/videos/bunny.mp4"} type={"mp4"} />
                                 </Player>
                                 **/}
                            </Card.Feature>


                        </Card>
                    ))}

                </Card.Group>

                <FooterContainer/>

            </>
        )
        :
        (
            <SelectProfileContainer user={user} setProfile={setProfile}/>

        );

}
