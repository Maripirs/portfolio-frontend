import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";

function App() {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		if (theme === "light") {
			document.documentElement.style.setProperty("--background1", "white");
			document.documentElement.style.setProperty("--background2", "#afbbc6");
			document.documentElement.style.setProperty("--background3", "#afbbc640");
			document.documentElement.style.setProperty("--background4", "#AFBBC6");
			document.documentElement.style.setProperty("--color1", "#524f6b");
			document.documentElement.style.setProperty("--color2", "black");
			document.documentElement.style.setProperty("--color3", "white");
			document.documentElement.style.setProperty(
				"--color4",
				"rgb(85, 85, 107, 0.5)"
			);
			document.documentElement.style.setProperty(
				"--project-shadow",
				"#00000020"
			);
			document.documentElement.style.setProperty(
				"--dr-border",
				"saturate(0) brightness(10)"
			);
			document.documentElement.style.setProperty(
				"--dr-lines",
				"saturate(1) brightness(0) invert(30%) sepia(11%) saturate(1166%) hue-rotate(207deg) brightness(96%) contrast(87%)"
			);
			document.documentElement.style.setProperty("--dr-shadows", "saturate(0)");
			document.documentElement.style.setProperty(
				"--dr-fill",
				"saturate(0) brightness(10)"
			);
		} else {
			document.documentElement.style.setProperty("--background1", "#212025");
			document.documentElement.style.setProperty("--background2", "#323246");
			document.documentElement.style.setProperty("--background3", "#292954");
			document.documentElement.style.setProperty("--background4", "#AFBBC6");
			document.documentElement.style.setProperty(
				"--project-shadow",
				"#00000040"
			);
			document.documentElement.style.setProperty("--color1", "white");
			document.documentElement.style.setProperty("--color2", "white");
			document.documentElement.style.setProperty("--color3", "white");
			document.documentElement.style.setProperty(
				"--color4",
				"85, 85, 107, 0.5"
			);
			document.documentElement.style.setProperty(
				"--dr-border",
				"saturate(0) brightness(10) "
			);
			document.documentElement.style.setProperty(
				"--dr-lines",
				"saturate(1) brightness(0) invert(8%) sepia(8%) saturate(1112%) hue-rotate(212deg) brightness(92%) contrast(87%)"
			);
			document.documentElement.style.setProperty("--dr-shadows", "saturate(0)");
			document.documentElement.style.setProperty(
				"--dr-fill",
				"saturate(0) brightness(10)"
			);
		}
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
