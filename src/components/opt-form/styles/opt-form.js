import styled from 'styled-components/macro';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;

`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e50914;
  color: #fff;
  padding: 0 32px;
  cursor: pointer;
  font-size: 26px;
  text-transform: uppercase;
  border: 0;
  

  &:hover {
    background-color: #f40612;
    
  }
  
  @media (max-width:1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
  
`;
export const Text = styled.p`
    color: #fff;
  font-size: 19px;
  text-align: center;
  
  @media(max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export  const BreakLine = styled.div`
  flex-basis: 100%;
  height: 0;
`;