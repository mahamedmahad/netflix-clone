import React from 'react';

import {Spinner,LockBody, Picture, ReleaseBody} from './styles/Loading';

//lock the body of entire page!


export default function Loading({src, ...restProps}) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}`}/>
        </Spinner>
    )
}

Loading.ReleaseBody = function loadingReleaseBody() {
    return <ReleaseBody />
}