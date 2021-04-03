import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px){
    margin-bottom: 50px;
    width: 380px;
  }
  @media screen and (max-width: 400px){
      width: 295px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;