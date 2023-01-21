import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects/Projects.js";
import About from "../../components/About/About.js";
import Skills from "../../components/Skills/Skills.js";
import ContactMe from "../../components/Contact/Contact.js";
import { useState, useEffect, createRef, useContext } from "react";
import "./Main.css";
import ThemeContext from "../../components/ThemeContext";

const Main = () => {
	const { theme } = useContext(ThemeContext);
	const [active, setActive] = useState("aboutNav");
	const [headerClass, setHeaderClass] = useState("header_active");
	const [prevScroll, setPrevScroll] = useState(0);
	const [navScrolling, setNavScrolling] = useState(false);
	useEffect(() => {
		setActive("aboutNav");
	});
	const handleScroll = (e) => {
		let currentScroll = e.target.scrollTop;
		if (
			e.target.scrollTop < 100 ||
			e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight - 100
		) {
			setHeaderClass("header_active");
		} else if (prevScroll < currentScroll) {
			setHeaderClass("header_hidden");
		} else {
			setHeaderClass("header_active");
		}
		setPrevScroll(currentScroll);
	};

	const refs = [];

	const newRef = () => {
		const ref = createRef();
		refs.push(ref);
		return ref;
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				let found = false;
				for (let i = 0; i < entries.length; i++) {
					if (entries[i].isIntersecting) {
						setActive(entries[i].target.id.concat("Nav"));
						found = true;
					}
				}
				if (!found) setActive("projectsNav");
			},
			{
				threshold: 0.5,
			}
		);

		refs.forEach((ref) => observer.observe(ref.current));

		return () => {
			refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
		};
	}, []);

	return (
		<div className={"main-page " + theme}>
			<Header
				active={active}
				headerClass={headerClass}
				setHeaderClass={setHeaderClass}
				setNavScrolling={setNavScrolling}
			/>
			<div
				className="main-content "
				onScroll={navScrolling ? undefined : handleScroll}
			>
				<div className="page-section" id="about" ref={newRef()}>
					<div className="header-background"></div>
					<About />
				</div>
				<div className="page-section" id="projects" ref={newRef()}>
					<div className="header-background"></div>
					<Projects />
				</div>
				<div className="page-section" id="skills" ref={newRef()}>
					<div className="header-background"></div>
					<Skills />
				</div>
				<div className="page-section" id="contact" ref={newRef()}>
					<div className="header-background"></div>
					<ContactMe />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Main;
