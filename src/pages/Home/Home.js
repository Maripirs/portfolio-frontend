import DrawingSmall from "../../components/drawing/DrawingSmall";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="welcome-screen" id="welcomeScreen">
			<h1>Hey! I'm Maripi</h1>
			<h2> Welcome to my Portfolio</h2>
			<DrawingSmall home="true" dimention="15vh" />
			<Link to="/main">
				<button className="view-work" type="button">
					View my Work
				</button>
			</Link>
		</div>
	);
}

export default Home;
