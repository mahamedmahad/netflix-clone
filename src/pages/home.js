import React from 'react';

import {HeaderContainer} from "../containers/header";
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from "../containers/footer";
import {FaqsContainer} from "../containers/faqs";
import {FeatureContainer} from '../containers/feature';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer />
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}