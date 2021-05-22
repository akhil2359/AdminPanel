import React from "react";
import PropTypes from "prop-types";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";

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
          <ChartContainer>
            <PieChart
              viewBoxSize={[240,240]}
              data={employeeStats}
              labelPosition={50}
              lengthAngle={360}
              lineWidth={40}
            />
          </ChartContainer>
          <Counter>
            {employeeStats.map((stats) => (
              <StatsItem>
                <Circle color={stats.color} />
                <Text fontSize={14} color="#FFF">
                  {stats.title} - {stats.value}
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
                {statsItem.value}
              </Text>
              <br />
              <Space vertical space={20} />
              <LabelItem>
                <Text fontSize={14} color="#FFF">
                  {statsItem.title}
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
  margin-left: 0px;
  position: absolute;
  left: 20%;
`;

const GraphContainer = styled.div`
  display: flex;
`;

const ChartContainer = styled.div`
  position: relative;
  top: 18px;
  right: 6px;
`;

const StatsContainer = styled.div`
  height: 30%;
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
