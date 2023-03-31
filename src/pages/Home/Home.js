import drawing from "../../components/SVG/drawing";
import "./Home.css";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
    return (
        <div className="welcome-screen" id="home">
            <h1>Hey! I'm Maripi</h1>
            <h2> Welcome to my Portfolio</h2>

            {drawing}
            <Link smooth to="/#projects" id="viewWork">
                <button className="view-work" type="button">
                    View my Work
                </button>
            </Link>
        </div>
    );
}

export default Home;
