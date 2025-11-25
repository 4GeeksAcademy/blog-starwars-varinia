import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'

export const DetailNave = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { uid } = useParams();

    const [nave, setNave] = useState({
        name:"", model:"", passengers:"", consumables:"", hyperdrive_rating:"", length:"", starship_class:"", 
    })

     function detailNave() {

         fetch(`https://www.swapi.tech/api/starships/${uid}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
         })
             .then(res => res.json())
             .then(data => setNave(data.result.properties))
             .catch(err => console.error("Error en el Fetch", err))

    }
    useEffect(() => {
        detailNave()
    }, [uid]);


    return (
        <div className="card" style={{ width: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/starships/${uid}.jpg`} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{nave.name}</h5>
                        <p className="card-text">{nave.model}</p>
                        <p className="card-text">{nave.passengers}</p>
                        <p className="card-text">{nave.consumables}</p>
                        <p className="card-text">{nave.hyperdrive_rating}</p>
                        <p className="card-text">{nave.length}</p>
                        <p className="card-text">{nave.starship_class}</p>
                    </div>
                </div>
            </div>
        </div>


            );
};