import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";
import ThemeContext from "./components/ThemeContext";

function App() {
	const [theme, setTheme] = useState("dark");
	const themeColors = {
		ligth: {
			background1: "white",
			background2: "white",
			background3: "white",
			color1: "black",
			color2: "black",
			color3: "black",
		},
		dark: {
			//main background
			// background1: "rgb(33, 32, 37)",
			background1: "black",
			//header and footer
			// background2: "rgb(50, 50, 70)",
			background2: "black",
			//
			background3: "black",
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
