import React from "react";
import "./Contact.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import FAQContainer from "../../components/FAQContainer/FAQContainer";

const Contact = () => {
	return (
		<ReactLenis root>
			<div className="page contact">
				<ContactForm />
				<FAQContainer />
				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(Contact);
