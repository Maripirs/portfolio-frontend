import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/main" element={<Main URL={URL} />} />
		</Routes>
	);
}

export default App;
