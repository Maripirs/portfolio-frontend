import "./Contact.css";
import { useState } from "react";
import Resume from "./Resume.pdf";
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
                {/* <form className="contact-form" onSubmit={submitForm}>
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
				</form> */}
                <div className="contact-text">
                    <p>Shoot me an email at mariapazmaluenda@gmail.com</p>
                    <p>or</p>
                    <p>Find me on LinkedIn and Github as @Maripirs</p>
                </div>
                
                {/* <div className="divider"></div>
                <a
                    href={Resume}
                    target="_blank"
                    className="resume-container resume-card"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="resumeSVG"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                    </svg>
                    <button className="view-work">Open Resume</button>
                </a> */}
            </div>
        </>
    );
};

export default Contact;
