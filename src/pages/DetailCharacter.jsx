import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const DetailCharacter = () => {
    const { uid } = useParams();

    const [character, setCharacter]= useState (null)

    function detailCharacter(){

    fetch("https://www.swapi.tech/api/people/"+uid)
        .then(res => res.json())
        .then(data => setCharacter(data.result.properties))
        .catch(err => console.error(err))

}
useEffect(() => {
		detailCharacter()
	}, [uid]);




return (
    <div className="card" style={{ width: "18rem" }}>
        {/* <img src={`https://github.com/breatheco-de/swapi-images/tree/master/public/images/people/${item.uid}`} className="card-img-top" alt="..."/> */} */}
        <div className="card-body">
            <h5 className="card-title">{props.properties.name}</h5>
            <p className="card-text">{props.properties.films}</p>
            <p className="card-text">{props.properties.homeworld}</p>
            <p className="card-text">{props.properties.name}</p>
            <Link className="btn btn-primary">Go somewhere</Link>
            <Link className="btn btn-primary">Fav</Link>
        </div>
    </div>

);
};