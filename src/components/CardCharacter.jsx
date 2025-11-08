import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const CardCharacter = ({props}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
             {/* <img src={`https://github.com/breatheco-de/swapi-images/tree/master/public/images/people/${item.uid}`} className="card-img-top" alt="..."/> */} */}
                <div className="card-body">
                    <h5 className="card-title">{props.properties.name}</h5>
                    <p className="card-text">{props.properties.films}</p>
                    <p className="card-text">{props.properties.homeworld}</p>
                    <p className="card-text">{props.properties.name}</p>
                    <Link className="btn btn-primary">Go somewhere</Link>
                    <Link className="btn btn-primary">Fav</Link>
                </div>
        </div>

    )
}

export default CardCharacter