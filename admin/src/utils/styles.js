import styled, { css } from "styled-components";
import { Input, Dropdown } from "semantic-ui-react";

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

export const StyledInput = styled(Input)`
  &&&&& {
    font-size: 16px;
    line-height: 20px;
    padding-left: 12px;
    outline: none !important;
    width: ${({ noPadding }) => (noPadding ? "none" : "800px")} ${css`
        input {
          border: none;
          padding: 0;
        }
        input::placeholder {
          color: #B3B3B3;
          font-size: 16px;
          line-height: 20px;
        }`};
  }
`;

export const StyledDropdown = styled(Dropdown)`
&&& {
  border: 1px solid #e5e5e5;
  padding: 10px;
  min-width: 100px;
  padding-top: 3px;
  border-radius: 2px 0px 0px 2px;
  height: 30px;
  color: #827e7e,
  min-width: 130px;
  margin-right: 20px;
  position: relative;
  left: 20px;
  bottom: 12px;
  font-size: 14px;
  &.ui.active.selection.dropdown {
    border-color: #e5e5e5 !important;
  }

  &.ui.selection.active.dropdown .menu {
    border-color: #e5e5e5 !important;
  }

  &.ui.dropdown .menu .selected.item,
  .ui.dropdown.selected {
    color: #e5e5e5 !important;
  }

  &.visible.transition {
    border-color: #e5e5e5 !important;
  }
}
`;
