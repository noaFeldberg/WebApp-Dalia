import React from "react";
import { Bootstrap, Grid, Row, Col } from 'react-bootstrap'
import ProjectCard from "./ProjectCard";
import cards from "../cards";

//*********************** Project function *******************************
let cardsToShow = (
  <div className='container'>
    {cards.map((card, index) => {
      return <ProjectCard
        id={card.id}
        Img={card.Img}
        title={card.title}>
      </ProjectCard>
    })}
  </div>
);

function Project() {
  return (
    <div>
      <div className="headeings" id="projectHeader"><h1>Projects</h1></div>

      {cardsToShow}
    </div>
  );
}

export default Project;