import {useState, useEffect, useContext} from "react";
import {FirebaseContext} from '../context/firebase';

export default function useAuthListener() {
    //listening to the user state
    //change depending user logged in or not
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    )

    const {auth} = useContext(FirebaseContext)

    /* This is a React Hook that is used to listen to the state of the user. */
    useEffect(() => {
        const listener = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //put in details in local Storage!
                //just display the user name inside local storage
                localStorage.setItem('authUser', JSON.stringify(authUser.displayName))
                setUser(authUser)
            } else {
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })

        //clean up
        return () => listener();

    }, [])

    return {user}

}