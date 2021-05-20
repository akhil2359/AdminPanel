import React from 'react';
import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Space = styled.div`
  margin-top: ${({ vertical, space }) => vertical && `${space}px`};
  margin-left: ${({ horizontal, space }) => horizontal && `${space}px`};
`;

export const Flex = styled.div`
  display: flex;
`;

