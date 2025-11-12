import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardCharacter from "../components/CardCharacter.jsx";

export const DetailCharacter = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const { uid } = useParams();

    const [character, setCharacter] = useState(null)

    function detailCharacter() {

        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            .catch(err => console.error(err))

    }
    useEffect(() => {
        detailCharacter()
    }, [uid]);




    return (
        <div className="card" style={{ width: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.properties.name}</h5>
                        <p className="card-text">{props.properties.films}</p>
                        <p className="card-text">{props.properties.homeworld}</p>
                        <p className="card-text">{props.properties.name}</p>
                    </div>
                </div>
            </div>
        </div>


            );
};