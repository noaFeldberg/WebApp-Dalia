import React,{ useState } from "react";
//import Radium from 'radium';
import { withRouter } from "react-router-dom";

function ProjectCard(props){
    return(
        <a href='./ProjectDescription' className='project'>
            <img className="project-image"
            id ={props.id}
            src={props.Img}
            title={props.title}>
            </img>
            <div className='project-title'><span> {props.title} </span></div>
        </a>
    );
}

export default ProjectCard;