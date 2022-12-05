import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Cardshow.css";
import ShowImage from "./ShowImage";

const CardShow = ({videogame}) => {
 const [count, setCount] = useState(videogame.count);
 const busquedaGoogle = `https://www.google.com/search?q=${videogame.name}`;
 const busquedaYoutube = `https://www.youtube.com/results?search_query=${videogame.name}`;

 return (
    <div className="card m-10 card-cont">
        <div>
            <ShowImage className="img" item={videogame} url="videogame"/>
            <h2>{videogame.name}</h2>
            <p><i>Aprox $</i>{videogame.price}</p>
            <p>{videogame.description}</p>
            <p><i>Approx of sales:</i> {videogame.quantity}</p>
            <div className="container">
            <p> <a href={busquedaGoogle} target="_blank" rel="noopener noreferrer"> Google </a></p>
            <p><a href={busquedaYoutube} target="_blank" rel="noopener noreferrer"> Youtube </a></p>
            </div>
        </div>
    </div>
 )
}

export default CardShow;