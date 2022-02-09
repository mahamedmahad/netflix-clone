import styled from "styled-components/macro";

import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  margin: auto;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;


export const Content = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;

`

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: none;
  color: #fff;
  padding: 5px 20px;
  margin-bottom: 20px;
  height: 50px;
  line-height: 50px;
  outline: none;
  
  
  &:hover, &:focus {
    outline-color: #039be5;
    outline-style: solid;
    outline-width: 2px;
  }
  
  &:last-of-type {
    margin-bottom: 30px;
  }
    
`

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 25px;
  }

`

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;

`

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: normal;
  color: #8c8c8c;

`

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;

  }

`

export const Button = styled.button`
  font-size: 16px;
  background: #e50914;
  border-radius: 5px;
  font-weight:  bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: none;
  cursor: pointer;
  color: #fff;
  
  &:disabled {
    opacity: 0.5;
  }
  
  

`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 5px;
  font-size: 14px;
  margin: 0 0 16px;
  color: #fff;
  padding: 15px 20px;


`;