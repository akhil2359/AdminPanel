/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { Icon, Button, Input, Modal, Pagination } from "semantic-ui-react";

// header stats card
import StatsCard from "./components/StatsCard";

import Text from "../../../../components/Text";

import { departmentOptions, locationOptions, defaultFormState } from "./utils";

import { Space, StyledDropdown } from "../../../../utils/styles";
import {
  PaginationContainer,
  RowActionContainer,
  ButtonWrapper,
  Link,
  TableContainer,
  RowItem,
  RowContainer,
  TableHeader,
  TableBody,
  IconsContainer,
  ActionsContainer,
  Container,
} from "./style";

const AdminDashboard = ({
  showForm,
  setShowForm,
  defaultEmployeesList,
  updateEmployeesList,
  setFormState,
  activePage,
  setActivePage,
}) => {
  function exampleReducer(state, action) {
    switch (action.type) {
      case "close":
        return { open: false };
      case "open":
        return { open: true, size: action.size };
      default:
        throw new Error("Unsupported action...");
    }
  }

  // states
  const [employeesList, setEmployeesList] = useState(defaultEmployeesList);
  const [defaultEmployees, setDefaultEmployees] = useState(
    defaultEmployeesList
  );
  const [searchText, setSearchText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    department: "all",
    location: "all",
    age: "all",
  });
  const [deletedUsers, setDeleteUsers] = useState([]);

  // hooks
  useEffect(() => {
    setEmployeesList(defaultEmployeesList);
    setDefaultEmployees(defaultEmployeesList);
  }, [defaultEmployeesList]);

  const [state, dispatch] = useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;

  //static employee stats
  const employeeStats = [
    {
      title: "Designers",
      key: "designers",
      color: "#DA4C5B",
      value: defaultEmployeesList.filter((e) =>
        e.department.toLowerCase().includes("design")
      ).length,
    },
    {
      title: "Developers",
      key: "developers",
      color: "#B3DD05",
      value: defaultEmployeesList.filter((e) =>
        e.department.toLowerCase().includes("develop")
      ).length,
    },
    {
      title: "Testers",
      key: "testers",
      color: "#4EC6D4",
      value: defaultEmployeesList.filter((e) =>
        e.department.toLowerCase().includes("test")
      ).length,
    },
    {
      title: "Managers",
      key: "managers",
      color: "#F86A03",
      value: defaultEmployeesList.filter((e) =>
        e.department.toLowerCase().includes("manag")
      ).length,
    },
  ];

  const getAgeOptions = () => {
    let ageOptions = [{ key: "all", text: "All", value: "all" }];
    for (var i = 45; i > 20; i--) {
      ageOptions.push({ key: i, text: i, value: i });
    }
    return ageOptions;
  };

  const TableHeaders = [
    "Full Name",
    "Job Title",
    "Department",
    "Location",
    "Age",
    "Salary",
    "Actions",
  ];

  const filterEmployees = ({
    value = null,
    key = null,
    type = "string",
    employees = defaultEmployees,
  }) => {
    let filters = { ...selectedFilters };
    if (value && key) {
      // updates selected filters state
      filters[key] = value;
      setSelectedFilters(filters);
    }

    let filteredEmployeesList = [];
    const { department, location, age } = filters;
    employees.map((employee) => {
      if (department === "all" && location === "all" && age === "all") {
        filteredEmployeesList.push(employee);
        return null;
      } else if (department !== "all") {
        if (
          department.includes(employee.department.toLowerCase()) &&
          (location === "all" ||
            (location !== "all" &&
              location.includes(employee.location.toLowerCase()))) &&
          (age === "all" || (age !== "all" && age === employee.age))
        ) {
          filteredEmployeesList.push(employee);
          return null;
        }
      } else if (location !== "all") {
        if (
          location.includes(employee.location.toLowerCase()) &&
          (department === "all" ||
            (department !== "all" &&
              department.includes(employee.department.toLowerCase()))) &&
          (age === "all" || (age !== "all" && age === employee.age))
        ) {
          filteredEmployeesList.push(employee);
          return null;
        }
      } else if (age !== "all") {
        if (
          age === employee.age &&
          (department === "all" ||
            (department !== "all" &&
              department.includes(employee.department.toLowerCase()))) &&
          (location === "all" ||
            (location !== "all" &&
              location.includes(employee.location.toLowerCase())))
        ) {
          filteredEmployeesList.push(employee);
          return null;
        }
      }

      return filteredEmployeesList;
    });
    setEmployeesList(filteredEmployeesList);
    return filteredEmployeesList;
  };

  const handleDeleteUser = () => {
    if (deletedUsers.length > 0) {
      const updatedList = employeesList.filter(
        (employee) => !deletedUsers.includes(employee.id)
      );
      setEmployeesList(updatedList);
      setDefaultEmployees(updatedList);
      updateEmployeesList(
        defaultEmployeesList.filter(
          (employee) => !deletedUsers.includes(employee.id)
        )
      );
      setSelectedFilters({
        department: "all",
        location: "all",  
        age: "all",
      });
    }
  };

  const renderActionBar = () => (
    <ActionsContainer>
      <Text fontSize={20} fontWeight={600}>
        List of Employees
      </Text>
      <StyledDropdown
        placeholder="Department"
        value={selectedFilters.department}
        name="department"
        options={departmentOptions}
        onChange={(e, data) => {
          filterEmployees({ value: data.value, key: "department" });
        }}
      />
      <StyledDropdown
        placeholder="Location"
        value={selectedFilters.location}

        name="location"
        options={locationOptions}
        onChange={(e, data) => {
          filterEmployees({ value: data.value, key: "location" });
        }}
      />
      <StyledDropdown
        placeholder="Select Age"
        value={selectedFilters.age}
        name="age"
        scrolling
        options={getAgeOptions()}
        onChange={(e, data) => {
          filterEmployees({ value: data.value, key: "age", type: "number" });
        }}
      />
      <IconsContainer>
        <Input
          size="mini"
          icon="search"
          placeholder="Search..."
          onChange={(e, data) => {
            setSearchText(data.value);
          }}
        />
        <Link>
          <Icon
            bordered
            inverted
            color="blue"
            name="add user"
            onClick={() => {
              setShowForm({ ...showForm, isOpen: true });
              setFormState(defaultFormState);
            }}
          />
        </Link>
      </IconsContainer>
    </ActionsContainer>
  );

  const renderTable = () => (
    <TableContainer>
      <TableHeader>
        {TableHeaders.map((header) => (
          <RowItem>
            <Text fontSize={14} fontWeight={600} color="#000">
              {header}{" "}
            </Text>
          </RowItem>
        ))}
      </TableHeader>
      <TableBody>
        {(() => {
          let filters = employeesList;
          if (activePage === 1) {
            filters = filters.filter((e) => e.id <= 10);
          } else if (activePage === 2) {
            filters = filters.filter((e) => e.id > 10 && e.id <= 20);
          } else {
            filters = filters.filter((e) => e.id > 20 && e.id < 30);
          }

          return filters
            .filter((e) =>
              searchText !== ""
                ? e.name.toLowerCase().includes(searchText.toLowerCase())
                : true
            )
            .map((employee) => (
              <RowContainer>
                {(() => {
                  const values = [];
                  Object.keys(employee).forEach((key) => {
                    if (employee[key] && key !== "id") {
                      values.push(employee[key]);
                    }
                  });
                  return values.map((value, index) => (
                    <RowItem>
                      <>
                        {(() => {
                          if (index === values.length - 1) {
                            return (
                              <RowActionContainer>
                                <ButtonWrapper>
                                  <Button
                                    primary
                                    color="blue"
                                    onClick={() => {
                                      setShowForm({
                                        ...showForm,
                                        isOpen: true,
                                        isUpdate: true,
                                        updateId: employee.id,
                                      });
                                      setFormState({
                                        fullname: employee.name,
                                        jobtitle: employee.jobTitle,
                                        department: employee.department.toLowerCase(),
                                        location: employee.location.toLowerCase(),
                                        age: employee.age,
                                        salary: parseInt(employee.salary),
                                      });
                                    }}
                                  >
                                    Edit
                                  </Button>
                                </ButtonWrapper>
                                <Space horizontal space={9} />
                                <Link>
                                  <Icon
                                    color="blue"
                                    name="trash"
                                    onClick={() => {
                                      setDeleteUsers([
                                        ...deletedUsers,
                                        employee.id,
                                      ]);
                                      dispatch({ type: "open", size: "mini" });
                                    }}
                                  />
                                </Link>
                              </RowActionContainer>
                            );
                          }
                          return (
                            <Text
                              fontSize={14}
                              fontWeight={600}
                              color="#827e7e"
                            >
                              {value}{" "}
                            </Text>
                          );
                        })()}
                      </>
                    </RowItem>
                  ));
                })()}
              </RowContainer>
            ));
        })()}
      </TableBody>
    </TableContainer>
  );

  return (
    <Container>
      <StatsCard employeeStats={employeeStats} />
      {renderActionBar()}
      {renderTable()}
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>Delete this user?</Modal.Header>
        <Modal.Content>
          <Text fontSize={14}>Are you sure you want to delete this user?</Text>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => dispatch({ type: "close" })}>No</Button>
          <Button
            color="blue"
            onClick={() => {
              dispatch({ type: "close" });
              handleDeleteUser();
            }}
          >
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <PaginationContainer>
        <Pagination
          color="blue"
          boundaryRange={0}
          defaultActivePage={activePage}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          totalPages={3}
          onPageChange={(e, data) => {
            const { activePage } = data;
            setActivePage(activePage);
          }}
        />
      </PaginationContainer>
    </Container>
  );
};

AdminDashboard.prototypes = {
  showForm: PropTypes.object.isRequired,
  setShowForm: PropTypes.func.isRequired,
  defaultEmployeesList: PropTypes.array.isRequired,
  updateEmployeesList: PropTypes.array.isRequired,
  setFormState: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
};
export default AdminDashboard;
