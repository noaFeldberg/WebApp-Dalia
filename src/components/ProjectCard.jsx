import React,{ useState } from "react";
//import Radium from 'radium';
import { withRouter } from "react-router-dom";


function handleMouseOver(props){
// var currCard =document.getElementById();
// currCard.style.opacity='0.5';
// currCard.append(<div className="imgTilt">{currCard.title}</div>)
// var a = this.title;
    console.log(props.title);
}


function ProjectCard(props){
    return(
        <img className="cardImg"
        id ={props.id} 
        src={props.Img}
        title={props.title}
        onMouseOver = {handleMouseOver(props)}>
        </img>
    );
}

export default ProjectCard;