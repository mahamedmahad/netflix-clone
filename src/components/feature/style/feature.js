import styled from 'styled-components/macro';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;

`;
export const Title = styled.h1`
  color: #fff;
  max-width: 640px;
  font-size: 45px;
  font-weight: 500;
  margin: auto;
  //text-align: center;

  @media (max-width: 600px) {
    font-size: 30px;

  }

`;
export const SubTitle = styled.h3`

  color: #fff;
  max-width: 640px;
  font-size: 26px;
  font-weight: normal;
  margin: 15px auto;
  //text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;

  }


`;