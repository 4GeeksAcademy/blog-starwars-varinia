import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src="https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/sw_logo.svg" className="card-img-top"
						style={{height: "40px", width: "60px"}}/>
					</span>
				</Link>
				<div className="ml-auto">
					{/* <Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link> */}
					 <Link className="btn btn-primary">Fav</Link>
				</div>
			</div>
		</nav>
	);
};