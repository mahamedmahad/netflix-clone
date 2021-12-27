import React from 'react';
import {Accordion, OptForm} from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions?</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.description}</Accordion.Body>
                </Accordion.Item>

            ))}

            <OptForm>
                <OptForm.Input  placeholder="Email address"/>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.BreakLine />
                <OptForm.Text>
                    Ready to Watch? Enter your email to create or restart membership
                </OptForm.Text>
            </OptForm>

        </Accordion>
    )
}