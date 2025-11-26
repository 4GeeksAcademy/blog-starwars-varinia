import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'

export const DetailCharacter = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { uid } = useParams();

    const [character, setCharacter] = useState({
        birth_year:"", eye_color:"", films:"", gender:"", hair_color:"", height:"", homeworld:"", mass: "", 
        name:"", skin_color:"", created: "", edited: "", species:"", starships:"", url: "", vehicles: "",
    })

     function detailCharacter() {

         fetch(`https://www.swapi.tech/api/people/${uid}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
         })
             .then(res => res.json())
             .then(data => setCharacter(data.result.properties))
             .catch(err => console.error("Error en el Fetch", err))

    }
    useEffect(() => {
        detailCharacter()
    }, [uid]);




    return (
        <div className="card" style={{ width: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{character.name}</h5>
                        <p className="card-text">Birth Year:{character.birth_year}</p>
                        <p className="card-text">{character.eye_color}</p>
                        <p className="card-text">{character.gender}</p>
                        <p className="card-text">{character.hair_color}</p>
                        <p className="card-text">{character.height}</p>
                        <p className="card-text">{character.skin_color}</p>
                    </div>
                </div>
            </div>
        </div>


            );
};