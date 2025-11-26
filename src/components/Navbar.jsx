import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 btn btn-warning">
						<img src="https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/sw_logo.svg" className="card-img-top"
							style={{ height: "40px", width: "60px" }} />
					</span>
				</Link>
				<div className="ml-auto">
					<div className="nav-item dropdown btn btn-warning">
						<button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites ({store.favorites.lenght})
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((fav, index) => (
								<li key={index} className="d-flex justify-content-between align-items-center px-3">
									<span>{fav.name}</span>
									<button className="btn btn-sm btn-warning" onClick={() => dispatch({
										type: "remove_favorite", payload: { index }})}
									><i className="fas fa-trash"></i>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};