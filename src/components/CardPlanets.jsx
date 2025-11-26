import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const CardPlanets = ({planets}) => {
const { store, dispatch } = useGlobalReducer();
const isFav = store.favorites.some(f => f.name === planets.name);
const toggleFavorite = () => {
        if (isFav) {
            const index = store.favorites.findIndex(f => f.name === planets.name);
            dispatch({
                type: "remove_favorite",
                payload: { index }
            });
        } else {
             dispatch({
                type: "add_favorite",
                payload: {
                    item: {
                        name: planets.name,
                        uid: planets.uid,
                        type: "planet"
                    }
                }
            });
        }
    };

    return (
        <div className="card" style={{width: "18rem"}}>
             <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planets.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{planets.name}</h5>
                    <Link to={`/planets/${planets.uid}`} className="btn btn-warning">Learn More</Link>
                    <button className={`btn ${isFav ? "btn btn-outline-warning" : "btn-primary"} ms-2`}onClick={toggleFavorite}>{isFav ? "♥" : "♡"}
                    </button>
                </div>
        </div>

    )
}
export default CardPlanets;