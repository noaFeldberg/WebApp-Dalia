import React from "react";
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap'
import ProjectCard from "./ProjectCard";
import cards from "../cards";

//*********************** Project function *******************************
function Project(){
    return(
      <div>
      <div className="headeings" id="projectHeader"><h1>Projects</h1></div>
      
      <Row>
        <Col className="cardsCol" >
        <ProjectCard id={cards[0].id} Img={cards[0].Img} title={cards[0].title}/>
        <ProjectCard id={cards[1].id} Img={cards[1].Img} title={cards[1].title}/>
        <ProjectCard id={cards[2].id} Img={cards[2].Img} title={cards[2].title}/>
        <ProjectCard id={cards[3].id} Img={cards[3].Img}/>
        </Col>
        <Col className="cardsCol">
        <ProjectCard Img={cards[0].Img}/>
        <ProjectCard Img={cards[1].Img}/>
        <ProjectCard Img={cards[2].Img}/>
        <ProjectCard Img={cards[3].Img}/>
        </Col>
        <Col className="cardsCol">
        <ProjectCard Img={cards[0].Img}/>
        <ProjectCard Img={cards[1].Img}/>
        <ProjectCard Img={cards[2].Img}/>
        <ProjectCard Img={cards[3].Img}/>
        </Col>
        <Col className="cardsCol">
        <ProjectCard Img={cards[0].Img}/>
        <ProjectCard Img={cards[1].Img}/>
        <ProjectCard Img={cards[2].Img}/>
        <ProjectCard Img={cards[3].Img}/>
        </Col>
        <Col className="cardsCol">
        <ProjectCard Img={cards[0].Img}/>
        <ProjectCard Img={cards[1].Img}/>
        </Col>
        </Row>
    
        </div>
    );
}

export default Project;