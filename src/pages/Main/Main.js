import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../Projects/Projects.js";
import About from "../About/About.js";
import { Route, Routes } from "react-router";
import "./Main.css";

const Main = () => {
	return (
		<div className="main-page">
			<Header />
			<div className="main-content">
				<Routes>
					<Route exact path="projects" element={<Projects URL={URL} />} />
					<Route exact path="about" element={<About URL={URL} />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default Main;
