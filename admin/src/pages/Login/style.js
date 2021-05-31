import styled, { css } from "styled-components";
import { Input } from "semantic-ui-react";
import { Flex } from "../../utils/styles";

export const ForgotPasswordBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  width: 100%;
  background: #b3c9fa;
  margin-bottom: 12px;
  padding: 10px;
`;

export const Link = styled.span`
  cursor: ${({ disable = false }) => (disable ? "not-allowed" : "pointer")}
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Banner = styled.div`
  width: 65vw;
  height: 100vh;
  background-image: url("/images/banner.png");
  background-size: cover;
  position: relative;
  bottom: 5px;
`;

export const StyledInput = styled(Input)`
  &&&&& {
    font-size: 14px;
    line-height: 20px;
    padding-left: 12px;
    margin-bottom: 16px;
    position: relative;
    right: 12px;
    outline: none !important;
    width: ${({ noPadding }) => (noPadding ? "none" : "800px")} ${css`
        input {
          border: none;
          padding: 0;
        }
        input::placeholder {
          color: #b3b3b3;
          font-size: 14px;
          line-height: 20px;
        }`};
  }
`;

export const ForgotPasswordContainer = styled.div`
  position: relative;
  left: 4px;
  cursor: pointer;
`;

export const BottomContainer = styled(Flex)`
  justify-content: space-between;
`;

export const ImageStrip = styled.div`
  position: absolute;
  right: -1px;
  top: -2px;
`;

export const RightContainer = styled.div`
  width: 35vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.div`
  background: #13449c;
  border-radius: 4px;
  padding: 7px 10px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? "0.4" : "1")}
`;

export const ErrorContainer = styled.div`
  position: relative;
  left: 4px;
  top: 2px;
`;

export const LoginContainer = styled.div`
  border: 1px solid lightgray;
  width: 80%;
  min-height: 260px;
  height: auto;
  padding: 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
