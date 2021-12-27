import React from 'react';
import {OptForm} from '../components/';
import {Feature} from '../components';
import {HeaderContainer} from "../containers/header";
import {JumbotronContainer} from '../containers/jumbotron';
import {FooterContainer} from "../containers/footer";
import {FaqsContainer} from "../containers/faqs";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, tv and more.
                    </Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address"/>
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.BreakLine/>
                        <OptForm.Text>
                            Ready to Watch? Enter your email to create or restart membership
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}