import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({src}) => (src ? (`../images/misc/${src}.jpg`) :
                  ('../images/misc/home-bg.jpg')
  )}) top left / cover
  no-repeat;


  @media (max-width: 1000px) {
    ${({dontShowOnSmallViewPort}) =>
            dontShowOnSmallViewPort && 'background: none;'
    }
  }




`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const TextLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-weight: ${({active}) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;


  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
      
  }
`;


export const Picture = styled.img`
  background: url(${({src}) => src });
  background-size: cover;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;

`;

export const DropDown = styled.div`
  display: none;
  background-color: #000;
  position: absolute;
  padding: 20px;
  width: 100px;
  top: 32px;
  right: 10px;
  border-radius: 3px;


  ${Group}:first-child ${TextLink} {
    margin-left: 10px;
  }
  
  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }
  
  ${Group} {
    margin-bottom: 10px;
    
    
    &:last-of-type {
      margin-bottom: 0;
    }

  ${TextLink}, ${Picture} {
    cursor: default;
  }
    
  }
  
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
  
 

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }
  
  &:hover > ${DropDown} {
    display: flex;
    flex-direction: column;
  }

`;



export const SignOut = styled(TextLink)``

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
  }

  @media (max-width: 1000px ) {
    margin: 0 30px;
  }

`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  //screen bigger than 1450px--
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }

`
export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;

  }

`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;


  @media (max-width: 1000px) {
    display: none;
  }

`;

export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  margin: 0;

`;


export const FeatureText = styled.h2`
  color: #fff;
  font-size: 50px;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  margin: 0;
  margin-bottom: 20px;

`;

