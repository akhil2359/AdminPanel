import styled from "styled-components";

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 7px;
  right: 0px;
`;

export const RowActionContainer = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  bottom: 6px;
`;

export const Link = styled.span`
  cursor: pointer;
`;

export const TableContainer = styled.div`
  padding: 20px 0 0px 20px;
  height: 50%;
  overflow-y: scroll;
`;

export const RowItem = styled.span`
  flex: 1;
`;

export const RowContainer = styled.div`
  margin: 30px 0;
  display: flex;
`;

export const TableHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
`;

export const TableBody = styled.div`
  margin-top: 15px;
  background: #fff;
  height: auto;
`;

export const EmptyContainer = styled.div`
  margin-top: 15px;
  background: #fff;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconsContainer = styled.div`
  position: relative;
  bottom: 12px;
  left: 20px;
  width: 280px;
  display: flex;
  justify-content: space-evenly;
`;

export const ActionsContainer = styled.div`
  display: flex;
  padding: 44px 0 0 12px;
`;

export const Container = styled.div`
  width: 90%;
  max-height: 650px;
  margin: 20px 5%;
  background: #fff;
  position: relative;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
