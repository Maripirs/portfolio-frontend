import Drawing from "../../components/drawing/Drawing";
import "./Home.css";
import { Link } from "react-router-dom";
import React from "react";

function Home(props) {
	return (
		<div className="welcomeScreen" id="welcomeScreen">
			<h1>Hey! I'm Maripi</h1>
			<h2> Welcome to my Portfolio</h2>
			<Drawing home="true" dimention="15vh" />
			<Link to="/main">
				<button className="view-work" type="button">
					View my Work
				</button>
			</Link>
		</div>
	);
}

export default Home;
