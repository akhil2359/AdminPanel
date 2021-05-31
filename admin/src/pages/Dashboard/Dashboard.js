import React, { useState, useEffect } from "react";
import axios from "axios";
import useReactRouter from "use-react-router";
import { Icon } from "semantic-ui-react";

import CreateEmployeeForm from "./components/CreateEmployeeForm";
import AdminDashboard from "./components/AdminDashboard";

import Text from "../../components/Text";
import Header from "../../components/Header";

import {
  defaultFormState,
  sideBarOptions,
} from "../Dashboard/components/AdminDashboard/utils";

import { Space } from "../../utils/styles";

import {
  StyledLabel,
  BodyContainer,
  SideBar,
  StyledOption,
  SignOut,
  Container,
} from "./style";

const Dashboard = () => {
  const [showForm, setShowForm] = useState({
    isOpen: false,
    isUpdate: false,
    updateId: null,
  });
  const [employeesList, setEmployeesList] = useState([]);
  const [filterParams, setFilterParams] = useState({
    name: undefined,
    jobtitle: undefined,
    department: undefined,
    location: undefined,
    age: undefined,
  });

  const [formState, setFormState] = useState({ ...defaultFormState });
  const [activePage, setActivePage] = useState(1);

  const { history } = useReactRouter();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // fetches employees from api
  useEffect(() => {
    // if not logged in, redirect to login page
    if (!isLoggedIn) {
      history.push("/login");
    } else {
      getEmployees();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const getEmployees = async (params = filterParams) => {
    axios
      .get("http://localhost:3001/api/employees", {
        params: params,
        crossdomain: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then(function ({ data }) {
        if (data) {
          setEmployeesList(data);
          setActivePage(1);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const addEmployee = (employee) => {
    if (employee) {
      // updates employee
      if (showForm.isUpdate && showForm.updateId) {
        axios
          .put(
            `http://localhost:3001/api/employees/${showForm.updateId}`,
            { ...employee },
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
            getEmployees(filterParams);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        // adds employee
        axios
          .post(
            "http://localhost:3001/api/employees",
            { ...employee },
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
            getEmployees(filterParams);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  const deleteEmployee = (id) => {
    if (id) {
      axios
        .delete(`http://localhost:3001/api/employees/${id}`, {})
        .then(function () {
          getEmployees(filterParams);
        })
        .catch(function (error) {
          console.log(error);
        });
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
      <SignOut
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          history.push("/login");
        }}
      >
        <Icon name="sign-out" inverted color="white" />
        <Space horizontal space={6} />
        <StyledLabel>
          <Text fontSize={16} color="#FFF">
            Sign out
          </Text>
        </StyledLabel>
      </SignOut>
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
            getEmployees={getEmployees}
            filterParams={filterParams}
            setFilterParams={setFilterParams}
            showForm={showForm}
            defaultEmployeesList={employeesList}
            formState={formState}
            setFormState={setFormState}
            activePage={activePage}
            setActivePage={setActivePage}
            deleteEmployee={deleteEmployee}
          />
        )}
      </BodyContainer>
    </Container>
  );
};

export default Dashboard;
