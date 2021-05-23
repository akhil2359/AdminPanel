import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";

import CreateEmployeeForm from "./components/CreateEmployeeForm";
import AdminDashboard from "./components/AdminDashboard";

import Text from "../../components/Text";
import Header from "../../components/Header";

import { fetchEmployees } from "../../actions/dashboard";

import {
  defaultEmployeesList,
  defaultFormState,
  sideBarOptions,
} from "../Dashboard/components/AdminDashboard/utils";

import { Space } from "../../utils/styles";

import {
  StyledLabel,
  BodyContainer,
  SideBar,
  StyledOption,
  Container,
} from "./style";

const Dashboard = () => {
  const [showForm, setShowForm] = useState({
    isOpen: false,
    isUpdate: false,
    updateId: null,
  });
  const [employeesList, setEmployeesList] = useState(defaultEmployeesList);

  const [formState, setFormState] = useState({ ...defaultFormState });
  const [activePage, setActivePage] = useState(1);

  // fetches employees from api
  useEffect(() => {
   fetchEmployees();
  });

  const addEmployee = (employee) => {
    if (employee) {
      // updates employee
      if (showForm.isUpdate && showForm.updateId) {
        let list = employeesList.filter((e) => e.id !== showForm.updateId);
        list = [{ id: showForm.updateId, ...employee }, ...list];
        setEmployeesList(list);
      } else {
        // adds employee
        setEmployeesList([
          { id: employeesList.length + 1, ...employee },
          ...employeesList,
        ]);
      }
    }
  };

  const renderSideBar = () => (
    <SideBar>
      {sideBarOptions.map((option) => (
        <StyledOption>
          <Icon name={option.icon} inverted color="white" />
          <Space horizontal space={6} />
          <StyledLabel>
            <Text fontSize={16} color="#FFF">
              {option.label}
            </Text>
          </StyledLabel>
        </StyledOption>
      ))}
    </SideBar>
  );

  return (
    <Container>
      <Header />
      <BodyContainer>
        {renderSideBar()}
        {showForm.isOpen ? (
          <CreateEmployeeForm
            setShowForm={setShowForm}
            showForm={showForm}
            addEmployee={addEmployee}
            formState={formState}
            setFormState={setFormState}
          />
        ) : (
          <AdminDashboard
            setShowForm={setShowForm}
            showForm={showForm}
            defaultEmployeesList={employeesList}
            updateEmployeesList={setEmployeesList}
            formState={formState}
            setFormState={setFormState}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        )}
      </BodyContainer>
    </Container>
  );
};

export default Dashboard;
