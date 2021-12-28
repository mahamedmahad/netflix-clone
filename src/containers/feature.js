import React from 'react';
import {Feature, OptForm} from '../components';

export  function FeatureContainer() {
    return (
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

    )
}