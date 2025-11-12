import { Link } from "react-router-dom";

export const Navbar = () => {

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
					<li className="nav-item dropdown btn btn-warning">
						<Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</Link>
						<ul className="dropdown-menu">
							<li><Link className="dropdown-item" href="#">Action</Link></li>
							<li><Link className="dropdown-item" href="#">Another action</Link></li>
							<li><Link className="dropdown-item" href="#">Something else here</Link></li>
						</ul>
					</li>
				</div>
			</div>
		</nav>
	);
};