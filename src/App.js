import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";
import ThemeContext from "./components/ThemeContext";

function App() {
	const [theme, setTheme] = useState("light");
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
	const themeColors = {
		light: {
			background1: "white",
			background2: "#afbbc6",
			background3: "#afbbc640",
			color1: "#524f6b",
			color2: "black",
			color3: "white",
		},
		dark: {
			//main background
			background1: "rgb(33, 32, 37)",

			//header and footer
			background2: "rgb(50, 50, 70)",

			//section
			background3: "rgb(41, 41, 84)",
			color1: "white",
			color2: "white",
			color3: "white",
		},
	};
	return (
		<ThemeContext.Provider value={{ theme, setTheme, themeColors }}>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/main" element={<Main URL={URL} />} />
			</Routes>
		</ThemeContext.Provider>
	);
}

export default App;
