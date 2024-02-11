import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import photoMe from '../../../assets/images/me.jpg';

export function Main() {
  return (
    <About id="Home">
      <Wrapper justify="space-around" align="center">
        <div>
          <span>Hi,👋</span>
          <br />
          <span>My name is Adam</span>
          <br />
          <h1>I'm a web developer</h1>
        </div>
        <PhotoStyled src={photoMe} alt="img" />
      </Wrapper>
    </About>
  );
}

const PhotoStyled = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;
const About = styled.section`
  width: 100%;
  height: 100vh;
  span {
    font-size: 30px
  }
  h1 {
    font-size: 40px
  }
`;
const Wrapper = styled(FlexWrapper)`
  height: 100vh
`
