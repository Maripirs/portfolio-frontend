import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";
import changeColors from "./ChangeColors";

function App() {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		changeColors(theme);
	}, [theme]);

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				setTheme(event.matches ? "dark" : "light");
			});
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			setTheme("dark");
		}
	}, []);
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--vh", `${vh}px`);

	// We listen to the resize event
	window.addEventListener("resize", () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	});

	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/main" element={<Main URL={URL} />} />
		</Routes>
	);
}

export default App;
