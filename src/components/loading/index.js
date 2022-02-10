import React from 'react';

import {Spinner, LockBody, Picture, ReleaseBody} from './styles/Loading';

//lock the body of entire page!


export default function Loading({src, ...restProps}) {
    return (
        <Spinner {...restProps}>
            <LockBody/>
            {  /*
                //chrom & brave - have different path
                `${src}` ? (
                    <Picture src={`/images/users/${src}`}/>
                ) : (
                    <Picture src={`/images/users/${src}.png`}/>
                ) */
            }
            <Picture src={`/images/users/${src}.png`}/>

        </Spinner>
    )
}

Loading.ReleaseBody = function loadingReleaseBody() {
    return <ReleaseBody/>
}