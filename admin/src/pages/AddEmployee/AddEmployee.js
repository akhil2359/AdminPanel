import React, { useState } from "react";
import styled from "styled-components";
import { Image, Icon } from "semantic-ui-react";

import Text from "../../components/Text";

import { Space, Center } from "../../utils/styles";

const AddEmployee = () => {
  const defaultFormState = {
    fullname: "",
    jobtitle: "",
    department: "",
    location: "",
    age: "",
    salary: "",
  };

  const [formState, setFormState] = useState({ ...defaultFormState });

  const sideBarOptions = [
    {
      label: "Employees",
      onClick: () => {
        console.log(">>");
      },
    },
    {
      label: "Organizations",
      onClick: () => {
        console.log(">>");
      },
    },
    {
      label: "Users",
      onClick: () => {
        console.log(">>");
      },
    },
    {
      label: "Settings",
      onClick: () => {
        console.log(">>");
      },
    },
  ];

  const formFields = [
    { label: "Full Name", fieldType: "fullname" },
    { label: "Job Title", fieldType: "jobtitle" },
    { label: "Department", fieldType: "department" },
    { label: "Location", fieldType: "location" },
    { label: "Age", fieldType: "age" },
    { label: "Salary", fieldType: "salary" },
  ];

  const handleInputChange = (value, name) => {
    const currentState = {};
    currentState[name] = value;

    setFormState({ ...formState, ...currentState });
  };

  const renderFormField = (label, name) => (
    <>
      <Text fontSize={16}>{label}</Text>
      <Input
        placeholder={label}
        onChange={(e) => handleInputChange(e.target.value, name)}
      />
      <Space vertical space={15} />
    </>
  );

  return (
    <Container>
      <Header>
        <LogoContainer>
          <Image src="/images/logo.png" width={200} height={50} />
        </LogoContainer>
        <InfoContainer>
          <LocationContainer>
            <Text fontSize={14} fontWeight={600} color="#FFF">
              Telangana,
            </Text>
            <br />
            <Text fontSize={14} fontWeight={600} color="#FFF" lineHeight={12}>
              Hyderabad
            </Text>
          </LocationContainer>
          <Space horizontal space={26} />
          <TimeContainer>
            <Text fontSize={14} fontWeight={600} color="#FFF">
              Thursday, May 21
            </Text>
            <br />
            <Text fontSize={14} fontWeight={600} color="#FFF">
              11: 24 AM, IST
            </Text>
          </TimeContainer>
        </InfoContainer>
      </Header>
      <BodyContainer>
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
        <FormContainer>
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
              renderFormField(field.label, field.fieldType)
            )}
          </FormBody>
        </FormContainer>
        <DetailsPreviewContainer>
          <ActionsContainer>
            <SaveButton>
              <Text fontSize={14} color="gray">
                Save
              </Text>
            </SaveButton>
            <Space horizontal space={30} />
            <StyledButton>
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
      </BodyContainer>
    </Container>
  );
};

export default AddEmployee;

const BodyContainer = styled.div`
  display: flex;
  width: 100vw;
`;

const ActionsContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  display: flex;
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

const Input = styled.input`
  padding: 15px;
  width: 90%;
  background: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 10px 0;
  outline: none;
`;
const Badge = styled(Center)`
  background: lightgray;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  left: 20px;
  bottom: 10px;
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

const SaveButton = styled.div`
  position: relative;
  top: 6px;
`;

const FormContainer = styled.div`
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

const InfoContainer = styled.div`
  display: flex;
  margin-right: 80px;
`;

const LocationContainer = styled.div`
  border: 1px solid white;
  border-radius: 4px;
  padding: 9px 20px 0;
`;

const TimeContainer = styled.div`
  position: relative;
  top: 9px;
`;

const StyledText = styled(Text)`
  display: block;
`;

const Container = styled.div`
  overflow-x: hidden;
`;

const Header = styled.div`
  width: 100vw;
  height: 60px;
  background: #388dde;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LogoContainer = styled.div`
  background: #fff;
  width: 230px;
  padding: 16px 0px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
