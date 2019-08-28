import React from "react";
import styled from "styled-components";

const MenuItem = props => (
  <Container>
    <IconView>{props.iconview}</IconView>
    <Content>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View``;

const IconView = styled.Text``;

const Content = styled.View``;

const Title = styled.Text``;

const Text = styled.Text``;
