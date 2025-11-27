import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const CardNaves = ({starships}) => {
const { store, dispatch } = useGlobalReducer();
const isFav = store.favorites.some(f => f.name === starships.name);
const toggleFavorite = () => {
        if (isFav) {
            const index = store.favorites.findIndex(f => f.name === starships.name);
            dispatch({
                type: "remove_favorite",
                payload: { index }
            });
        } else {
             dispatch({
                type: "add_favorite",
                payload: {
                    item: {
                        name: starships.name,
                        uid: starships.uid,
                        type: "starship"
                    }
                }
            });
        }
    };

    return (
        <div className="card mx-1" style={{minWidth: "18rem"}}>
             <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/starships/${starships.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{starships.name}</h5>
                    <Link to={`/starships/${starships.uid}`} className="btn btn-warning">Learn More</Link>
                    <button className={`btn ${isFav ? "btn btn-outline-warning" : "btn-primary"} ms-2`}onClick={toggleFavorite}>{isFav ? "♥" : "♡"}
                    </button>
                </div>
        </div>

    )
}
export default CardNaves;