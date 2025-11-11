import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import CardCharacter from "../components/CardCharacter.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
///personajes
	async function character() {
		const response = await fetch("https://www.swapi.tech/api/people/")
		const data = await response.json();
		const allCharacter = data.results;

		dispatch({
			type: "get_personajes",
			payload: { personajes: allCharacter }
		})

	}
	useEffect(() => {
		character()
	}, []);



return (
	<div className="text-center mt-5">
		<h1>Star Wars Blog</h1>
		<h3>Character</h3>
		{store.character.map((value, index) => {
			return (
				<CardCharacter key={index} people={value} />
			)
		})}
		

	</div>
);
///planetas


///naves
}