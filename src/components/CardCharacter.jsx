import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, {useState} from "react";

const CardCharacter = ({people}) => {
const { store, dispatch } = useGlobalReducer();
const isFav = store.favorites.some(f => f.name === people.name);
const toggleFavorite = () => {
        if (isFav) {
            const index = store.favorites.findIndex(f => f.name === people.name);
            dispatch({
                type: "remove_favorite",
                payload: { index }
            });
        } else {
             dispatch({
                type: "add_favorite",
                payload: {
                    item: {
                        name: people.name,
                        uid: people.uid,
                        type: "character"
                    }
                }
            });
        }
    };

    return (
        <div className="card" style={{width: "18rem"}}>
             <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{people.name}</h5>
                    <p className="card-text">Born:{people.homeworld}</p>
                    <Link to={`/personaje/${people.uid}`} className="btn btn-warning">Learn More</Link>
                    <button className={`btn ${isFav ? "btn btn-outline-warning" : "btn-primary"} ms-2`}onClick={toggleFavorite}>{isFav ? "♥" : "♡"}
                    </button>
                </div>
        </div>

    )
}
export default CardCharacter;
