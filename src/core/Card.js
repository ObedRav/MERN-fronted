import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Card.css";
import ShowImage from "./ShowImage";

const Card = ({videogame}) => {
 const [count, setCount] = useState(videogame.count);

 return (
    <div className="card m-10 card-cont">
        <div>
            <ShowImage className="img" item={videogame} url="videogame"/>
            <h2>{videogame.name}</h2>
            <p><i>Aprox price $</i>{videogame.price}</p>
            <p>{videogame.description}</p>
            <p><i><b>Category: </b></i> {videogame.category.name}</p>
            <Link to = {`/games/${videogame._id}`}>
                <button className="btn btn-success" >Show more</button>
            </Link>
        </div>
    </div>
 )
}

export default Card;