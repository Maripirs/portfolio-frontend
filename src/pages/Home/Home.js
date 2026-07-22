import Drawing from "../../components/SVG/drawing";
import "./Home.css";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
    const viewProjects = () => {
        const projectsSection = document.getElementById("projects");

        if (!projectsSection) {
            return;
        }

        window.history.pushState(
            null,
            "",
            `${window.location.pathname}#projects`
        );
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="welcome-screen" id="home">
            <h1>Hey! I'm Maripi</h1>
            <h2> Welcome to my Portfolio</h2>

            <Drawing onReplayComplete={viewProjects} />
            <Link smooth to="/#projects" id="viewWork">
                <button className="view-work" type="button">
                    View my Work
                </button>
            </Link>
        </div>
    );
}

export default Home;
