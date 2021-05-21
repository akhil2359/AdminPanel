import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import Text from "../../../../../components/Text";

import { Space } from "../../../../../utils/styles";

const StatsCard = ({ employeeStats }) => {
  return (
    <StatsContainer>
      <DepartmentStats>
        <Text fontSize={22} fontWeight={600} color="#FFF">
          Department
        </Text>
        <GraphContainer>
          <ImageContainer>
            <Image src="/images/graph.png" width={130} height={130} />
          </ImageContainer>
          <Counter>
            {employeeStats.map((stats) => (
              <StatsItem>
                <Circle color={stats.statsColor} />
                <Text fontSize={14} color="#FFF">
                  {stats.label} - {stats.total}
                </Text>
              </StatsItem>
            ))}
          </Counter>
        </GraphContainer>
      </DepartmentStats>
      <EmployeeStats>
        <Text fontSize={22} fontWeight={600} color="#FFF">
          Employees
        </Text>
        <EmployeesCount>
          {employeeStats.map((statsItem) => (
            <CounterItem>
              <Text fontSize={70} fontWeight={400} color="#FFF">
                {statsItem.total}
              </Text>
              <br />
              <Space vertical space={20} />
              <LabelItem>
                <Text fontSize={14} color="#FFF">
                  {statsItem.label}
                </Text>
              </LabelItem>
            </CounterItem>
          ))}
        </EmployeesCount>
      </EmployeeStats>
    </StatsContainer>
  );
};

StatsCard.prototypes = {
  employeeStats: PropTypes.array.isRequired,
};

export default StatsCard;

const LabelItem = styled.span`
  position: relative;
  left: 10px;
  top: 6px;
`;

const CounterItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const EmployeesCount = styled.div`
  position: relative;
  top: 75px;
  display: flex;
`;

const StatsItem = styled.div`
  display: flex;
  margin-bottom: 18px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color};
  position: relative;
  right: 10px;
  bottom: 4px;
`;

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
  margin-left: 18px;
`;

const GraphContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
  top: 24px;
  right: 6px;
`;

const StatsContainer = styled.div`
  height: 25%;
  background: #13449c;
  display: flex;
  padding: 30px 30px 0px;
  justify-content: space-between;
`;

const DepartmentStats = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmployeeStats = styled.div`
  display: flex;
  flex-direction: column;
`;
