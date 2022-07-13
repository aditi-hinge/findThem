import React from "react";
import styled from "styled-components";
import { GitHub } from "@material-ui/icons";

export default function Navbar() {
  return (
    <Container>
      <Name>Made by Aditi</Name>
      <MadeBy href="https://github.com/aditi-hinge">
        <GitHub />
      </MadeBy>
      <Artist href="https://www.reddit.com/user/Chekavo/">
        Art by Chekavo
      </Artist>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  font-size: 1rem;
  background-color: #254117;
  color: white;
  width: 100vw;
  margin: 0;
`;

const Name = styled.h1`
  font-size: 1rem;
`;
const MadeBy = styled.a`
  text-decoration: none;
  color: white;
`;

const Artist = styled.a`
  text-decoration: none;
  color: white;
`;
