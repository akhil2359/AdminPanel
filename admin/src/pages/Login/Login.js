import React, { useState, useEffect } from "react";
import axios from "axios";
import useReactRouter from "use-react-router";
import { Image } from "semantic-ui-react";

import Text from "../../components/Text";

import { isEmailValid } from "./util";

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
  const defaultFormState = {
    userName: "",
    password: "",
    email: "",
    forgotEmail: "",
  };

  const [formState, setFormState] = useState(defaultFormState);
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

  const { userName, password, email, forgotEmail } = formState;

  const handleLogin = () => {
    // handle signup here
    if (isSignUp) {
      if (!!userName && !!password && !!email) {
        axios
          .post(
            "https://akhilsapps.herokuapp.com/api/users/signup",
            { username: userName, password: password, email: email },
            {
              crossdomain: true,
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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
      if (!!email && password !== "") {
        // handle login here
        axios
          .post(
            "https://akhilsapps.herokuapp.com/api/users/login",
            { email: email, password: password },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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
        "https://akhilsapps.herokuapp.com/api/users/forgot-password",
        { email: forgotEmail },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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

  const isLoginDisabled = () => {
    const isUserNameAndPasswordValid = !!email && !!password;
    if (isSignUp) {
      return isUserNameAndPasswordValid && !!userName && isEmailValid(email);
    } else {
      return isUserNameAndPasswordValid;
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
            {isForgotPassword ? (
              "Forgot Password?"
            ) : (
              <>{isSignUp ? "Sign Up" : "Login"} to the Dashboard</>
            )}
          </Text>
          <Space vertical space={20} />
          {!isForgotPassword ? (
            <>
              {isSignUp && (
                <StyledInput
                  placeholder="Enter User Name"
                  type="text"
                  value={userName}
                  onChange={(e) =>
                    setFormState({ ...formState, userName: e.target.value })
                  }
                  maxLength={100}
                />
              )}
              <StyledInput
                placeholder="Enter Email"
                type="email"
                value={email}
                error={email.length && !isEmailValid(email)}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                maxLength={100}
              />
              <StyledInput
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) =>
                  setFormState({ ...formState, password: e.target.value })
                }
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
                    Email already exists, please try with other email
                  </Text>
                </ErrorContainer>
              )}
              <Space vertical space={28} />
              <BottomContainer>
                <StyledButton
                  disabled={false}
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setFormState(defaultFormState);
                    setIsFormValid(true);
                    setIsSignUpValid(true);
                  }}
                >
                  <Text fontSize={14} fontWeight={600} color="#FFF">
                    {isSignUp ? "Back to Login" : "New? Sign Up"}
                  </Text>
                </StyledButton>
                <StyledButton
                  onClick={handleLogin}
                  disabled={!isLoginDisabled()}
                >
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
                error={!!forgotEmail && !isEmailValid(forgotEmail)}
                value={forgotEmail}
                onChange={(e) =>
                  setFormState({ ...formState, forgotEmail: e.target.value })
                }
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
                  disable={
                    !!!forgotEmail ||
                    (!!forgotEmail && !isEmailValid(forgotEmail))
                  }
                  onClick={() => {
                    if (forgotEmail !== "") {
                      setIsSendLink(true);
                      handleForgotPassword();
                    }
                  }}
                >
                  <Text
                    fontSize={14}
                    color="gray"
                    opacity={
                      !!forgotEmail && isEmailValid(forgotEmail) ? 1 : 0.5
                    }
                  >
                    {isSendLink ? "Resend" : "Send"} Link
                  </Text>
                </Link>
                <Link
                  onClick={() => {
                    setIsForgotPassword(false);
                    setIsSignUp(false);
                    setFormState(defaultFormState);
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
