import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";
import { Center } from "../../../../utils/styles";

export const ActionsContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  display: flex;
`;

export const Divider = styled.div`
  height: 70vh;
  width: 2px;
  margin-top: 10vh;
`;

export const InputContainer = styled.div`
  position: relative;
  top: 10px;
  right: 6px;
  margin-bottom: 26px;
`;

export const StyledDropdown = styled(Dropdown)`
&&& {
  border: 1px solid #e5e5e5;
  padding: 10px;
  min-width: 200px;
  border-radius: 2px 0px 0px 2px;
  height: 40px;
  position: relative;
  left: 10px;
  color: #827e7e,
  margin-right: 20px;
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

export const Badge = styled(Center)`
  background: lightgray;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  left: 20px;
  bottom: 10px;
`;

export const SaveButton = styled.div`
  position: relative;
  top: 6px;
  cursor: pointer;
`;

export const StyledForm = styled.div`
  width: 40%;
  height: 96vh;
  padding: 60px 0 0 80px;
  background: #f8fcff;
`;

export const DetailsPreviewContainer = styled.div`
  width: 40%;
  background: #f8fcff;
  height: 96vh;
  padding: 136px 0 0 80px;
  position: relative;
`;

export const FormHeader = styled.div`
  display: flex;
`;

export const FormBody = styled.div`
  margin-top: 40px;
`;
