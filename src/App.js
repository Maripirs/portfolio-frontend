import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/main/*" element={<Main />} />
		</Routes>
	);
}

export default App;
