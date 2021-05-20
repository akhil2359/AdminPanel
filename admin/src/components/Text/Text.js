import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = ({
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight,
  color,
  opacity,
  children,
  wordBreak,
  textDecoration,
  ...rest
}) => (
  <StyledText
    fontSize={fontSize}
    lineHeight={lineHeight}
    letterSpacing={letterSpacing}
    fontWeight={fontWeight}
    color={color}
    wordBreak={wordBreak}
    opacity={opacity}
    textDecoration={textDecoration}
    {...rest}
  >
    {children}
  </StyledText>
);

Text.propTypes = {
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  letterSpacing: PropTypes.number,
  fontWeight: PropTypes.number,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  opacity: PropTypes.number,
  children: PropTypes.node,
  wordBreak: PropTypes.string,
  textDecoration: PropTypes.string,
  whiteSpace: PropTypes.string,
};

Text.defaultProps = {
  fontSize: 0,
  lineHeight: 0,
  fontWeight: 400,
  letterSpacing: 0.3,
  color: "#000000",
  opacity: 1,
  children: null,
  wordBreak: "normal",
  textDecoration: "none",
  whiteSpace: "normal",
};

export default Text;

const StyledText = styled.span`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  word-break: ${({ wordBreak }) => wordBreak};
  text-decoration: ${({ textDecoration }) => textDecoration};
  white-space: ${({ whiteSpace }) => whiteSpace};
`;
