import React, {createContext, useState, useContext} from 'react';
import {
    Container,
    Inner,
    Title,
    Frame,
    Item,
    Header,
    Body
} from './styles/accordion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ToggleContext = createContext();

export default function Accordion({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}) {
    //pull info from togglecontext
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return (
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)}   {...restProps}>
            {children}
            {toggleShow ? (
                <RemoveIcon/>
            ) : (
                <AddIcon/>
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
    const {toggleShow} = useContext(ToggleContext)
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}