import React from 'react';

//hooks
import {useContent} from "../hooks";

export  default  function Browse() {
    //series and films
    const {series} = useContent('series')
    const {films} = useContent('films')
    //console.log(series)
    //slides
    //pass it to the browse container

    return (
       <div>

       </div>
    )
}