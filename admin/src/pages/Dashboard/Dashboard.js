import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

import CreateEmployeeForm from "./components/CreateEmployeeForm";
import AdminDashboard from "./components/AdminDashboard";

import Text from "../../components/Text";
import Header from "../../components/Header";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);

  const sideBarOptions = [
    {
      label: "Employees",
      onClick: () => {},
    },
    {
      label: "Organizations",
      onClick: () => {},
    },
    {
      label: "Users",
      onClick: () => {},
    },
    {
      label: "Settings",
      onClick: () => {},
    },
  ];

  const renderSideBar = () => (
    <SideBar>
      {sideBarOptions.map((option) => (
        <StyledOption>
          <Icon disabled name="users" />
          <Text fontSize={16} color="#FFF">
            {option.label}
          </Text>
        </StyledOption>
      ))}
    </SideBar>
  );

  return (
    <Container>
      <Header />
      <BodyContainer>
        {renderSideBar()}
        {showForm ? (
          <CreateEmployeeForm setShowForm={setShowForm} />
        ) : (
          <AdminDashboard />
        )}
      </BodyContainer>
    </Container>
  );
};

export default Dashboard;

const BodyContainer = styled.div`
  display: flex;
  width: 100vw;
  background: #d2e1ed;
`;

const SideBar = styled.div`
  width: 20%;
  background: #13449c;
  height: 100vw;
  padding: 40px 0 0 30px;
`;

const StyledOption = styled.div`
  margin-top: 20px;
`;

const Container = styled.div`
  overflow-x: hidden;
`;
