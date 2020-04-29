import React from "react";
import { Bootstrap, Grid, Row, Col } from 'react-bootstrap'
import ProjectCard from "./ProjectCard";
import cards from "../cards";

//*********************** Project function *******************************
let cardsToShow = (
  <Col className="cardsCol">
    {cards.map((card, index) => {
      return <ProjectCard
          id={card.id}
          Img={card.Img}
          title={card.title}>
        </ProjectCard>
    })}
  </Col>
);

function Project() {
  return (
    <div>
      <div className="headeings" id="projectHeader"><h1>Projects</h1></div>

      <Row>
        {cardsToShow}
        {cardsToShow}
        {cardsToShow}
        {cardsToShow}
      </Row>

    </div>
  );
}

export default Project;