import React, {useContext, useEffect, useState} from 'react';


//components
import {Browse, Loading} from '../components'
import SelectProfileContainer from './profiles'


//context
import {FirebaseContext} from '../context/firebase';


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
        console.log('Profile:', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])


    /**Check if their is a display Name!*/
    return profile.displayName ? (
            <>  {/**after user select a profile display: **/}
                {loading ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/>}
            </>
        )
        :
        (
            <SelectProfileContainer user={user} setProfile={setProfile}/>

        );

}
