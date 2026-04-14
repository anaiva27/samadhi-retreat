import React from "react";
import "./Welcome.css";

import WelcomeFAQContainer from "../../components/WelcomeFAQContainer/WelcomeFAQContainer";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Welcome = () => {
	return (
		<ReactLenis root>
			<div className="page faq">
				<WelcomeFAQContainer />
				<ContactForm />
				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(Welcome);
