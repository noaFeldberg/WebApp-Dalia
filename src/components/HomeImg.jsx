import React from "react";
import ReactDOM from 'react-dom';

var imageName = require('../images/background12.jpg')

function HomeImg(){
    return(
       <container className="homeContainer">
        <img className="homePic" src={imageName} />
        <ul className="rows">
            <li>Dalia Boltanski.</li>
            <li>Modern. Clean. Simpel.</li>
        </ul>
        </container>
    );
}

export default HomeImg;