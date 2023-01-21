import "./Contact.css";
import { useState } from "react";
const Contact = (props) => {
	const submitForm = (e) => {
		e.preventDefault();
		console.log(form);
	};
	const initialState = {
		email: "",
		content: "",
	};
	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};
	const [form, setForm] = useState(initialState);
	return (
		<>
			<h2 className="section-title"> Contact </h2>
			<div className="contact-container">
				<h3>Say Hi!</h3>
				<form className="contact-form" onSubmit={submitForm}>
					<input
						type="text"
						placeholder="Your Email"
						id="email"
						onChange={handleChange}
					/>
					<textarea
						type="text"
						placeholder="Type your message"
						id="content"
						onChange={handleChange}
					/>
					<input type="submit" className="submit-button" />
				</form>
			</div>
		</>
	);
};

export default Contact;
