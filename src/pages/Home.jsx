import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardCharacter from "../components/CardCharacter.jsx";
import { useEffect } from "react";
import { isHtmlElement } from "react-router-dom/dist/dom.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();
	const personajes = store.personajes || [];

	const character = async (params) => {
		try {
			const resp = await fetch(`https://www.swapi.tech/api/people/`)
			const data = await resp.json();
			dispatch({
				type: "get_personajes",
				payload: "data.personajes"
			})
		} catch (error) {
			console.log("No se encontraron los personajes", error);

		}

	}

	useEffect(() => {
		character
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Star Wars Blog</h1>
			<h3>Character</h3>
			{character.length === 0 ? (<p>El Imperio capturo a todos</p>
			):(
			character.map((properties) => (
			<CardCharacter
				key={item.id}
				properties={item}
			/>
			))
			)
		}
		</div>
	);
}; 