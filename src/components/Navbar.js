import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Container>
      <Title>Find Them!</Title>
      <Timer>00:00:56</Timer>
      <Found>2</Found>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  font-size: 2rem;
  background-color: #006400;
  color: white;
  width: 100vw;
`;

const Title = styled.h1`
  font-size: 2rem;
`;
const Timer = styled.div``;
const Found = styled.div``;
