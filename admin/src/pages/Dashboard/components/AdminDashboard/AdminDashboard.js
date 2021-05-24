/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";
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
  EmptyContainer,
  IconsContainer,
  ActionsContainer,
  Container,
} from "./style";

const AdminDashboard = ({
  showForm,
  setShowForm,
  defaultEmployeesList,
  setFormState,
  activePage,
  setActivePage,
  filterParams,
  setFilterParams,
  deleteEmployee,
  getEmployees,
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
  const [deleteUserId, setDeleteUserId] = useState(null);

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
      value:
        defaultEmployeesList && defaultEmployeesList.length
          ? defaultEmployeesList.filter((e) =>
              e.department.toLowerCase().includes("design")
            ).length
          : 0,
    },
    {
      title: "Developers",
      key: "developers",
      color: "#B3DD05",
      value:
        defaultEmployeesList && defaultEmployeesList.length
          ? defaultEmployeesList.filter((e) =>
              e.department.toLowerCase().includes("develop")
            ).length
          : 0,
    },
    {
      title: "Testers",
      key: "testers",
      color: "#4EC6D4",
      value:
        defaultEmployeesList && defaultEmployeesList.length
          ? defaultEmployeesList.filter((e) =>
              e.department.toLowerCase().includes("test")
            ).length
          : 0,
    },
    {
      title: "Managers",
      key: "managers",
      color: "#F86A03",
      value:
        defaultEmployeesList && defaultEmployeesList.length
          ? defaultEmployeesList.filter((e) =>
              e.department.toLowerCase().includes("manag")
            ).length
          : 0,
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
    let params = { ...filterParams };
    params[key] = value === "all" ? undefined : value;
    setFilterParams(params);
    getEmployees(params);
  };

  const handleDeleteUser = () => {
    if (deleteUserId) {
      deleteEmployee(deleteUserId);
    }
    setDeleteUserId(null);
  };

  const renderActionBar = () => (
    <ActionsContainer>
      <Text fontSize={20} fontWeight={600}>
        List of Employees
      </Text>
      <StyledDropdown
        placeholder="Department"
        name="department"
        options={departmentOptions}
        onChange={(e, data) => {
          filterEmployees({ value: data.value, key: "department" });
        }}
      />
      <StyledDropdown
        placeholder="Location"
        name="location"
        options={locationOptions}
        onChange={(e, data) => {
          filterEmployees({ value: data.value, key: "location" });
        }}
      />
      <StyledDropdown
        placeholder="Select Age"
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
            filterEmployees({
              value: data.value === "" ? undefined : data.value,
              key: "name",
            });
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
      {employeesList.length === 0 && (
              <EmptyContainer>

          <Image src="https://carmelcollegemodankap.in/Content/images/Carmel/nodata.jpg" width={300} height={300} />

</EmptyContainer>
      )}
      <TableBody>
        {employeesList.map((employee, index) => ((index+1) <= activePage *  10) && ((index+1) > (activePage - 1) * 10) &&
        (
          <>
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
                                      jobtitle: employee.jobtitle,
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
                                    setDeleteUserId(employee.id);
                                    dispatch({
                                      type: "open",
                                      size: "mini",
                                    });
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
          </>
        )
        )}
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
          totalPages={(() => {
            var val = 1;
            for (var i = 1; 10 * i < employeesList.length; i++) {
              val = i + 1;
            }
            return val;
          })()}
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
  setFormState: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  filterParams: PropTypes.object.isRequired,
  setFilterParams: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};
export default AdminDashboard;
