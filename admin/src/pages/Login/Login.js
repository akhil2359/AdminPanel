import React from "react";

import styled from "styled-components";
import { Image } from "semantic-ui-react";

const Login = () => (
  <Container>
    <ImageWrapper></ImageWrapper>
    <LoginContainer>
      <ImageStrip>
        <Image src="/images/arrow.png" />
      </ImageStrip>
    </LoginContainer>
  </Container>
);

export default Login;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const ImageWrapper = styled.div`
  width: 65vw;
  height: 100vh;
  background-image: url("/images/banner.png");
  background-size: cover;
  position: relative;
  bottom: 5px;
`;

const ImageStrip = styled.div`
  position: absolute;
  right: -1px;
  top: -2px;
`;

const LoginContainer = styled.div`
  width: 35vw;
  height: 100vh;
  position: relative;
`;
