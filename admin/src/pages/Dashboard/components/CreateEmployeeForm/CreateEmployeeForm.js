import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Text from "../../../../components/Text";

import { Center, Space } from "../../../../utils/styles";

const CreateEmployeeForm = ({ setShowForm }) => {
  const defaultFormState = {
    fullname: "",
    jobtitle: "",
    department: "",
    location: "",
    age: "",
    salary: "",
  };
  const [formState, setFormState] = useState({ ...defaultFormState });

  const formFields = [
    { label: "Full Name", fieldType: "fullname" },
    { label: "Job Title", fieldType: "jobtitle" },
    { label: "Department", fieldType: "department" },
    { label: "Location", fieldType: "location" },
    { label: "Age", fieldType: "age", type: "number" },
    { label: "Salary", fieldType: "salary", type: "number" },
  ];

  const handleInputChange = (value, name) => {
    const currentState = {};
    currentState[name] = value;

    setFormState({ ...formState, ...currentState });
  };

  const renderFormField = (label, name, type = "text") => (
    <>
      <Text fontSize={16}>{label}</Text>
      <Input
        type={type}
        placeholder={label}
        onChange={(e) => handleInputChange(e.target.value, name)}
      />
      <Space vertical space={15} />
    </>
  );

  return (
    <>
      <StyledForm>
        <FormHeader>
          <Text fontSize={20} fontWeight={600}>
            Create Employee
          </Text>
          <Badge>
            <Text fontSize={12}>60sec</Text>
          </Badge>
        </FormHeader>
        <FormBody>
          {formFields.map((field) =>
            renderFormField(field.label, field.fieldType, field.type)
          )}
        </FormBody>
      </StyledForm>
      <DetailsPreviewContainer>
        <ActionsContainer>
          <SaveButton>
            <Text fontSize={14} color="gray">
              Save
            </Text>
          </SaveButton>
          <Space horizontal space={30} />
          <StyledButton
            onClick={() => {
              setShowForm(false);
            }}
          >
            <Text fontSize={14} fontWeight={600} color="#FFF">
              Create Employee
            </Text>
          </StyledButton>
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
  setShowForm: PropTypes.func.isRequired,
};

export default CreateEmployeeForm;

const ActionsContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  display: flex;
`;

const Badge = styled(Center)`
  background: lightgray;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  left: 20px;
  bottom: 10px;
`;

const Input = styled.input`
  padding: 15px;
  width: 90%;
  background: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 10px 0;
  outline: none;
`;

const SaveButton = styled.div`
  position: relative;
  top: 6px;
`;

const StyledForm = styled.div`
  width: 40%;
  height: 100vw;
  padding: 60px 0 0 80px;
  background: #f8fcff;
  border-right: 2px solid gray;
`;

const DetailsPreviewContainer = styled.div`
  width: 40%;
  background: #f8fcff;
  height: 100vw;
  padding: 136px 0 0 80px;
  position: relative;
`;

const StyledButton = styled.div`
  background: #13449c;
  border-radius: 4px;
  padding: 7px 10px;
  cursor: pointer;
`;

const FormHeader = styled.div`
  display: flex;
`;

const FormBody = styled.div`
  margin-top: 40px;
`;
