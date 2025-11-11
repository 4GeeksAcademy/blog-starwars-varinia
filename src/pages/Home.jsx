import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import CardCharacter from "../components/CardCharacter.jsx";
import CardPlanets from "../components/CardPlanets.jsx";
import CardNaves from "../components/CardNaves.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	
	async function character() {
		const response = await fetch("https://www.swapi.tech/api/people/")
		const data = await response.json();
		const allCharacter = data.results;

		dispatch({
			type: "get_personajes",
			payload: { personajes: allCharacter }
		})

	}

	async function galaxy() {
		const response = await fetch("https://swapi.dev/api/planets/")
		const data = await response.json();
		const allGalaxy = data.results;

		dispatch({
			type: "get_planets",
			payload: { planets: allGalaxy }
		})

	}

	async function Naves() {
		const response = await fetch("http https://swapi.dev/api/starships/")
		const data = await response.json();
		const allCharacter = data.results;

		dispatch({
			type: "get_naves",
			payload: { naves: allStarhips }
		})

	}

	useEffect(() => {
		character()
		galaxy()
	}, []);



	return (
		<div className= "text-center mt-5">
			<h1>Star Wars Blog</h1>
			<h3>Character</h3>
			<div id="carouselCharacter" className="carousel slide carousel-fade">
				<div className="carousel-inner">
					{store.character.map((value, index) => {
						return (
							<CardCharacter key={index} people={value}/>
						)
					})}
				</div>
			</div>

			<h3>Planets</h3>
			<div id="carouselPlanets" className="carousel slide carousel-fade">
				<div className="carousel-inner">
					{store.galaxy.map((value, index) => {
						return (
							<CardPlanets key={index} planets={value} />
						)
					})}
				</div>
			</div>
			<h3>Starships</h3>
			<div id="carouselStarships" className="carousel slide carousel-fade">
				<div className="carousel-inner">
					{store.naves.map((value, index) => {
						return (
							<CardNaves key={index} starships={value} />
						)
					})}
				</div>
			</div>
		</div>
	);
};