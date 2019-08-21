import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Text>My first app!</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  justify-content: center;
  align-items: center;
`;
