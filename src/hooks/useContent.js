import {useEffect, useState, useContext} from 'react';
import {FirebaseContext} from '../context/firebase';

export default function useContent(target) {
    //target can be films or series
    const [content, setContent] = useState([])
    const {db} = useContext(FirebaseContext)



    useEffect(() => {

        /* Listening to the firebase database and whenever there is a change in the database, it will update the content
        state. */
        db.collection(target).onSnapshot((snapshot) => {
            const allContent = snapshot.docs.map((doc) => ({
                ...doc.data(),
                docId: doc.id
            }))

            setContent(allContent)
        })


    }, [])

    /* Returning a object with the target as the key and the content as the value. */
    return {[target]: content}
}
