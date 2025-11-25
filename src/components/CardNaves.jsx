import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const CardNaves = ({starships}) => {
const { store, dispatch } = useGlobalReducer();
console.log(store.naves);

    return (
        <div className="card" style={{width: "18rem"}}>
             <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/starships/${starships.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name:{starships.name}</h5>
                    <Link to={`/starships/${starships.uid}`} className="btn btn-warning">Learn More</Link>
                    <Link className="btn btn-primary">♡</Link>
                </div>
        </div>

    )
}
export default CardNaves;