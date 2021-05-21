import React from "react";
import styled from "styled-components";

import StatsCard from "./components/StatsCard";

const AdminDashboard = () => {

  //static employee stats
  const employeeStats = [
    { label: "Designers", key: "designers", statsColor: "#DA4C5B", total: 12 },
    {
      label: "Developers",
      key: "developers",
      statsColor: "#B3DD05",
      total: 20,
    },
    { label: "Testers", key: "testers", statsColor: "#4EC6D4", total: 8 },
    { label: "Managers", key: "managers", statsColor: "#F86A03", total: 17 },
  ];

  return (
    <Container>
      <StatsCard employeeStats={employeeStats} />
    </Container>
  );
};
export default AdminDashboard;

const Container = styled.div`
  width: 90%;
  height: 700px;
  margin: 20px 5%;
  background: #FFF;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
`;
