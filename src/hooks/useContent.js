import {useEffect, useState, useContext} from 'react';
import {FirebaseContext} from '../context/firebase';

export default function useContent(target) {
    //target can be films or series
    const [content, setContent] = useState([])
    const {db} = useContext(FirebaseContext)


    useEffect(() => {

        db.collection(target).onSnapshot((snapshot) => {
            const allContent = snapshot.docs.map((doc) => ({
                ...doc.data(),
                docId: doc.id
            }))

            setContent(allContent)
        })


    }, [])

    return {[target]: content}
}
