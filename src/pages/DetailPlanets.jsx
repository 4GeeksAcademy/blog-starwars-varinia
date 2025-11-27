import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'

export const DetailPlanet = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { uid } = useParams();

    const [planet, setPlanet] = useState({
        climate:"", diameter:"", gravity:"", gender:"", orbital_period:"", population:"", residents:"", name:"", 
    })

     function detailPlanet() {

         fetch(`https://www.swapi.tech/api/planets/${uid}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
         })
             .then(res => res.json())
             .then(data => setPlanet(data.result.properties))
             .catch(err => console.error("Error en el Fetch", err))

    }
    useEffect(() => {
        detailPlanet()
    }, [uid]);


    return (
        <div className="card" style={{ width: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-2">{planet.name}</h5>
                        <p className="card-text"><span className="fw-bold">Climate: </span>{planet.climate}</p>
                        <p className="card-text"><span className="fw-bold">Diameter: </span>{planet.diameter}</p>
                        <p className="card-text"><span className="fw-bold">Gravity: </span>{planet.gravity}</p>
                        <p className="card-text"><span className="fw-bold">Orbital Period: </span>{planet.orbital_period}</p>
                        <p className="card-text"><span className="fw-bold">Population: </span>{planet.population}</p>
                        <p className="card-text"><span className="fw-bold">Residents: </span>{planet.residents}</p>
                    </div>
                </div>
            </div>
        </div>


            );
};