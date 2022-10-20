import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import { useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	/*Using fetch option */
	// useEffect(() => {
	//   fetch(url)
	//     .then(response => response.json())
	//     .then(data => console.log(data))
	// })

	/*Using async await option */
	const fetchTours = async () => {
		setLoading(true);

		try {
			const response = await fetch(url);
			const tours = await response.json();

			setLoading(false);

			setTours(tours);
		} catch (error) {
			setLoading(false);
      console.log(error)
    }
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
		<main>
			<Tours tours={tours}/>
		</main>
	);
};

export default App;
