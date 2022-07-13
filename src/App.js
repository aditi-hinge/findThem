import "./styles.css";
import Main from "./Images/main.jpg";
import Target from "./Images/target.png";
import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const ref = React.useRef(null);

  const [open, setOpen] = React.useState("");
  const [style, setStyle] = React.useState({});

  // to get the coordinates of when clicked on the image
  function getCoordinates(e) {
    const elementPosition = document
      .getElementById("image")
      .getBoundingClientRect();
    setStyle({
      display: "flex",
      left: e.clientX - elementPosition.x - 40 + "px",
      top: e.clientY - elementPosition.y + 13 + "px"
    });
    setOpen(!open);
  }

  return (
    <Container>
      <Navbar />
      <Image
        src={Main}
        alt="main"
        id="image"
        onClick={getCoordinates}
        ref={ref}
      />
      {open && (
        <div id="selection-content" style={style}>
          <img src={Target} alt="target" id="target" />
          <div id="selections">
            <div className="option">Ryuk</div>
            <div className="option">Chris Griffin</div>
            <div className="option">Turnip Head</div>
          </div>
        </div>
      )}
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #254117;
`;
const Image = styled.img`
  position: relative;
  width: 100vw;
  cursor: pointer;
`;
