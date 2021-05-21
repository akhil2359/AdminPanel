import React, { useState } from "react";
import useReactRouter from "use-react-router";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import Text from "../../components/Text";

import { Space, Flex } from "../../utils/styles";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(true);

  const { history } = useReactRouter();

  const handleLogin = () => {
    if (userName === "Admin" && password === "Admin@1234") {
      history.push("/dashboard");
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <Container>
      <Banner />
      <RightContainer>
        <ImageStrip>
          <Image src="/images/arrow.png" />
        </ImageStrip>
        <LoginContainer>
          <Text fontSize={18} color="#13449C" fontWeight={600}>
            Login to the Dashboard
          </Text>
          <Space vertical space={20} />
          <Input
            placeholder="Enter User Name"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ForgotPasswordContainer>
            <Text fontSize={14} color="gray">
              {" "}
              Forgot Password{" "}
            </Text>
          </ForgotPasswordContainer>

          {!isFormValid && (
            <ErrorContainer>
              <Text fontSize={12} color="red" fontWeight={400}>
                {" "}
                Incorrect Credentials! Please try again
              </Text>
            </ErrorContainer>
          )}
          <Space vertical space={28} />
          <BottomContainer>
            <StyledButton>
              <Text fontSize={14} fontWeight={600} color="#FFF">
                New? Sign Up
              </Text>
            </StyledButton>
            <StyledButton onClick={handleLogin}>
              <Text fontSize={14} fontWeight={600} color="#FFF">
                Login Now
              </Text>
            </StyledButton>
          </BottomContainer>
        </LoginContainer>
      </RightContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Banner = styled.div`
  width: 65vw;
  height: 100vh;
  background-image: url("/images/banner.png");
  background-size: cover;
  position: relative;
  bottom: 5px;
`;

const ForgotPasswordContainer = styled.div`
  position: relative;
  left: 4px;
  cursor: pointer;
`;

const BottomContainer = styled(Flex)`
  justify-content: space-between;
`;

const ImageStrip = styled.div`
  position: absolute;
  right: -1px;
  top: -2px;
`;

const RightContainer = styled.div`
  width: 35vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.div`
  background: #13449c;
  border-radius: 4px;
  padding: 7px 10px;
  cursor: pointer;
`;

const ErrorContainer = styled.div`
  position: relative;
  left: 4px;
  top: 2px;
`;

const Input = styled.input`
  padding: 15px;
  width: 90%;
  background: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 10px 0;
  outline: none;
`;

const LoginContainer = styled.div`
  border: 1px solid lightgray;
  width: 330px;
  min-height: 260px;
  height: auto;
  padding: 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
