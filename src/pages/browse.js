import React from 'react';

//hooks
import {useContent} from "../hooks";

import selectionFilter from "../utils/selection-filter-genres";
import BrowseContainer from "../containers/browse";

export  default  function Browse() {
    //series and films
    const {series} = useContent('series')
    const {films} = useContent('films')
    //console.log(series)


    //slides
    const slides = selectionFilter({series, films});
    //console.log(slides)





    //pass it to the browse container

    return (
        <BrowseContainer slides={slides}/>
    )
}