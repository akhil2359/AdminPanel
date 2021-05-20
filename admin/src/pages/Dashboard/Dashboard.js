import React from 'react';
import styled, { css } from "styled-components";

export default function Dashboard() {
    return (
        <div>
        <Input placeholder="User Name" type="text" />
      </div>
    )
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 200px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

