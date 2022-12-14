import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects/Projects.js";
import About from "../../components/About/About.js";
import Skills from "../../components/Skills/Skills.js";
import ContactMe from "../../components/Contact/Contact.js";
import { useState, useEffect, createRef } from "react";
import "./Main.css";

const Main = () => {
	const [active, setActive] = useState("aboutNav");

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
		<div className="main-page">
			<Header active={active} />
			<div className="main-content">
				<div className="page-section" id="about" ref={newRef()}>
					<About />
				</div>
				<div className="page-section" id="projects" ref={newRef()}>
					<Projects />
				</div>
				<div className="page-section" id="skills" ref={newRef()}>
					<Skills />
				</div>
				<div className="page-section" id="contact" ref={newRef()}>
					<ContactMe />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Main;
