import React,{ useState } from "react";
//import Radium from 'radium';
import { withRouter } from "react-router-dom";

function ProjectCard(props){
    return(
        <a href='#' class='grid'>
            <img className="cardImg"
            id ={props.id} 
            src={props.Img}
            title={props.title}>
            </img>
            <div class='projectTitle'><span> {props.title} </span></div>
        </a>
    );
}

export default ProjectCard;