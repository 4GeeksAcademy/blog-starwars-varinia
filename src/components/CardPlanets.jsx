import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const CardPlanets = ({planets}) => {
const { store, dispatch } = useGlobalReducer();

    return (
        <div className="card" style={{width: "18rem"}}>
             <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planets.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{planets.name}</h5>
                    <Link to={`/planets/${planets.uid}`} className="btn btn-warning">Go somewhere</Link>
                    <Link className="btn btn-primary">Fav</Link>
                </div>
        </div>

    )
}
export default CardPlanets;