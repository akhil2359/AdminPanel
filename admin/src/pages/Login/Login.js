import React, { useState, useEffect } from "react";
import axios from "axios";
import useReactRouter from "use-react-router";
import { Image } from "semantic-ui-react";

import Text from "../../components/Text";

import { Space } from "../../utils/styles";

import {
  ForgotPasswordBottomContainer,
  InfoContainer,
  Link,
  Container,
  Banner,
  StyledInput,
  ForgotPasswordContainer,
  BottomContainer,
  ImageStrip,
  RightContainer,
  StyledButton,
  ErrorContainer,
  LoginContainer,
} from "./style";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSendLink, setIsSendLink] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [isSignUpValid, setIsSignUpValid] = useState(true);

  const { history } = useReactRouter();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleLogin = () => {
    // handle signup here
    if (isSignUp) {
      if (userName !== "" && password !== "") {
        axios
          .post(
            "http://localhost:3001/api/users/signup",
            { username: userName, password: password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(function ({ data }) {
            if (data.status === "success") {
              localStorage.setItem("isLoggedIn", true);
              history.push("/dashboard");
            } else {
              setIsSignUpValid(false);
            }
          })
          .catch(function (error) {
            setIsSignUpValid(false);
            console.log(error);
          });
      }
    } else {
      if (userName !== "" && password !== "") {
        // handle login here
        axios
          .post(
            "http://localhost:3001/api/users/login",
            { username: userName, password: password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(function ({ data }) {
            if (data.status === "success") {
              localStorage.setItem("isLoggedIn", true);
              history.push("/dashboard");
            } else {
              setIsFormValid(false);
            }
          })
          .catch(function (error) {
            setIsFormValid(false);
            console.log(error);
          });
      }
    }
  };

  const handleForgotPassword = () => {
    axios
      .post(
        "http://localhost:3001/api/users/forgot-password",
        { email: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function ({ data }) {
        console.log(data);
      })
      .catch(function (error) {
        
        console.log(error);
      });
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
            {isForgotPassword ? (
              "Forgot Password?"
            ) : (
              <>{isSignUp ? "Sign Up" : "Login"} to the Dashboard</>
            )}
          </Text>
          <Space vertical space={20} />
          {!isForgotPassword ? (
            <>
              <StyledInput
                placeholder="Enter User Name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                maxLength={100}
              />
              {/* {isSignUp && (
                <StyledInput
                  placeholder="Enter Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={100}
                />
              )} */}
              <StyledInput
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={100}
              />
              <ForgotPasswordContainer
                onClick={() => setIsForgotPassword(true)}
              >
                <Text fontSize={14} color="gray">
                  {" "}
                  Forgot Password{" "}
                </Text>
              </ForgotPasswordContainer>

              {!isFormValid && !isSignUp && (
                <ErrorContainer>
                  <Text fontSize={12} color="red" fontWeight={400}>
                    {" "}
                    Incorrect Credentials! Please try again
                  </Text>
                </ErrorContainer>
              )}
              {isSignUp && !isSignUpValid && (
                <ErrorContainer>
                  <Text fontSize={12} color="red" fontWeight={400}>
                    {" "}
                    Username already exists, please try other username
                  </Text>
                </ErrorContainer>
              )}
              <Space vertical space={28} />
              <BottomContainer>
                <StyledButton
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setUserName("");
                    setPassword("");
                    setEmail("");
                    setIsFormValid(true);
                    setIsSignUpValid(true);
                  }}
                >
                  <Text fontSize={14} fontWeight={600} color="#FFF">
                    {isSignUp ? "Back to Login" : "New? Sign Up"}
                  </Text>
                </StyledButton>
                <StyledButton onClick={handleLogin}>
                  <Text fontSize={14} fontWeight={600} color="#FFF">
                    {isSignUp ? "Sign Up" : "Login Now"}
                  </Text>
                </StyledButton>
              </BottomContainer>
            </>
          ) : (
            <>
              <StyledInput
                placeholder="Enter your Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                maxLength={100}
              />
              <br />
              {isSendLink && (
                <InfoContainer>
                  <Text fontSize={14}>
                    We have send you an email with reset password link. Kindly
                    access the link to reset the Password.
                  </Text>
                </InfoContainer>
              )}

              <ForgotPasswordBottomContainer>
                <Link
                  onClick={() => {
                    if (email !== "") {
                      setIsSendLink(true);
                      handleForgotPassword();
                    }
                  }}
                >
                  <Text fontSize={14} color="gray">
                    {isSendLink ? "Resend" : "Send"} Link
                  </Text>
                </Link>
                <Link
                  onClick={() => {
                    setIsForgotPassword(false);
                    setIsSignUp(false);
                    setEmail("");
                  }}
                >
                  <Text fontSize={14} color="gray">
                    Login
                  </Text>
                </Link>
              </ForgotPasswordBottomContainer>
            </>
          )}
        </LoginContainer>
      </RightContainer>
    </Container>
  );
};

export default Login;
