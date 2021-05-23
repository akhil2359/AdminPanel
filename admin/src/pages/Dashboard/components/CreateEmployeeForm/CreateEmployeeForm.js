import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

import Text from "../../../../components/Text";

import { departmentOptions, locationOptions } from "../AdminDashboard/utils";

import { Space, StyledInput } from "../../../../utils/styles";

import {
  ActionsContainer,
  Divider,
  InputContainer,
  StyledDropdown,
  Badge,
  SaveButton,
  StyledForm,
  DetailsPreviewContainer,
  FormHeader,
  FormBody,
} from "./style";

const CreateEmployeeForm = ({
  showForm,
  setShowForm,
  addEmployee,
  formState,
  setFormState,
}) => {
  const formFields = [
    { label: "Full Name", fieldType: "fullname", type: "string" },
    { label: "Job Title", fieldType: "jobtitle", type: "string" },
    {
      label: "Department",
      fieldType: "department",
      type: "dropdown",
      options: departmentOptions,
    },
    {
      label: "Location",
      fieldType: "location",
      type: "dropdown",
      options: locationOptions,
    },
    { label: "Age", fieldType: "age", type: "number" },
    { label: "Salary", fieldType: "salary", type: "number" },
  ];

  const handleInputChange = (value, name) => {
    const currentState = {};
    currentState[name] = value;

    setFormState({ ...formState, ...currentState });
  };

  const renderFormField = (label, name, type = "text", options = {}) => (
    <>
      <Text fontSize={16}>{label}</Text>
      <br />
      <InputContainer>
        {type !== "dropdown" ? (
          <StyledInput
            placeholder={label}
            type={type}
            value={formState[name]}
            onChange={(e) => handleInputChange(e.target.value, name)}
            maxLength={100}
          />
        ) : (
          <StyledDropdown
            placeholder={label}
            name={name}
            options={options}
            value={formState[name]}
            onChange={(e, data) => {
              let currentFormState = { ...formState };
              currentFormState[name] = data.value;
              setFormState(currentFormState);
            }}
          />
        )}
      </InputContainer>
      <Space vertical space={15} />
    </>
  );

  return (
    <>
      <StyledForm>
        <FormHeader>
          <Text fontSize={20} fontWeight={600}>
            {showForm.isUpdate ? "Update" : "Create"} Employee
          </Text>
          <Badge>
            <Text fontSize={12}>60sec</Text>
          </Badge>
        </FormHeader>
        <FormBody>
          {formFields.map((field) =>
            renderFormField(
              field.label,
              field.fieldType,
              field.type,
              field.options
            )
          )}
        </FormBody>
      </StyledForm>
      <Divider />
      <DetailsPreviewContainer>
        <ActionsContainer>
          <SaveButton
            onClick={() =>
              setShowForm({ isOpen: false, isUpdate: false, updateId: null })
            }
          >
            <Text fontSize={14} color="gray">
              Cancel
            </Text>
          </SaveButton>
          <Space horizontal space={30} />

          <Button
            primary
            disabled={
              Object.values(formState).filter((e) => e === "").length !== 0
            }
            color="blue"
            onClick={() => {
              addEmployee({
                name: formState["fullname"],
                jobtitle: formState["jobtitle"],
                department: formState["department"],
                location: formState["location"],
                age: formState["age"],
                salary: formState["salary"],
              });
              setShowForm({ isOpen: false, isUpdate: false, updateId: null });
            }}
          >
            <Text fontSize={14} fontWeight={600} color="#FFF">
              {showForm.isUpdate ? "Update" : "Create"} Employee
            </Text>
          </Button>
        </ActionsContainer>

        {formFields.map((field) => (
          <>
            <Text fontSize={14} color="gray">
              {field.label}
            </Text>
            <br />
            <Text fontSize={14} fontWeight={600} lineHeight={30}>
              {formState[field.fieldType]}
            </Text>
            <br />
            <Space vertical space={14} />
          </>
        ))}
      </DetailsPreviewContainer>
    </>
  );
};

CreateEmployeeForm.prototypes = {
  showForm: PropTypes.object.isRequired,
  setShowForm: PropTypes.func.isRequired,
  addEmployee: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
  setFormState: PropTypes.func.isRequired,
};

export default CreateEmployeeForm;
