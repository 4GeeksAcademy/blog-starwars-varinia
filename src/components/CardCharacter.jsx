import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, {useState} from "react";

const CardCharacter = ({people}) => {
const { store, dispatch } = useGlobalReducer();

    return (
        <div className="card" style={{width: "18rem"}}>
             <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{people.name}</h5>
                    <p className="card-text">Born:{people.homeworld}</p>
                    <Link to={`/personaje/${people.uid}`} className="btn btn-warning">Learn More</Link>
                    <Link className="btn btn-primary">♡</Link>
                </div>
        </div>

    )
}
export default CardCharacter;
