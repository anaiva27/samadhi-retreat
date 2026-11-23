import React from "react";
import "./Gallery.css";

import FAQContainer from "../../components/FAQContainer/FAQContainer";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import Masonry from "../../components/Masonry/Masonry";

const Gallery = () => {
	return (
		<ReactLenis root>
			<div className="gallery">
				<section className="masonry-gallery">
					<h3 className="gallery-first-headline">
						{" "}
						Tulum - Where Water Cleanses
					</h3>
					<Masonry location="Tulum" />
				</section>
				<section className="masonry-gallery">
					<h3 className="gallery-headline"> Peru - Where Earth Holds You</h3>
					<Masonry location="Peru" />
				</section>
				<section className="masonry-gallery">
					<h3 className="gallery-headline"> Guatemala - Where Fire Purifies</h3>
					<Masonry location="Guatemala" />
				</section>
				<ContactForm />
				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(Gallery);

// const images = [
// 	{ id: 1, src: "/tulum/1K3A8082.JPG", alt: "", ratio: 0.75 },
// 	{ id: 2, src: "/tulum/1K3A8290.JPG", alt: "", ratio: 1.5 },
// 	{
// 		id: 3,
// 		src: "/tulum/b68098af-8212-4383-9f39-a4b48a92fe17.JPG",
// 		alt: "",
// 		ratio: 1.5,
// 	},
// 	{ id: 6, src: "/tulum/hero-t1.JPG", alt: "", ratio: 0.75 },
// 	{ id: 4, src: "/tulum/Sunrise_Yoga-06.JPG", alt: "", ratio: 1.5 },
// 	{ id: 5, src: "/tulum/IMG_0938.JPG", alt: "", ratio: 1.5 },
// 	{ id: 9, src: "/tulum/IMG_7870.JPG", alt: "", ratio: 0.75 },
// 	{ id: 8, src: "/tulum/Sunrise-11.JPG", alt: "", ratio: 1.5 },
// 	{ id: 7, src: "/tulum/IMG_0939.JPG", alt: "", ratio: 1.5 },
// 	{ id: 10, src: "/tulum/Cenote-Corazon.jpg", alt: "", ratio: 1.5 },
// 	{ id: 11, src: "/tulum/IMG_9978.JPG", alt: "", ratio: 0.75 },
// ];

// const images = [
// 	{ id: 1, src: "/home/1K3A8261.JPG", alt: "", ratio: 0.75 },
// 	{ id: 2, src: "/slider/hero2.jpg", alt: "", ratio: 1.5 },
// 	{ id: 3, src: "/slider/hero3.jpg", alt: "", ratio: 1.5 },
// 	{ id: 6, src: "/home/Sunrise-46.JPG", alt: "", ratio: 0.75 },
// 	{ id: 4, src: "/home/SS-237.jpg", alt: "", ratio: 1.5 },
// 	{ id: 5, src: "/slider/hero2.jpg", alt: "", ratio: 1.5 },
// 	{ id: 9, src: "/home/IMG_3902.JPG", alt: "", ratio: 0.75 },
// 	{ id: 8, src: "/slider/hero5.jpg", alt: "", ratio: 1.5 },
// 	{ id: 7, src: "/slider/hero3.jpg", alt: "", ratio: 1.5 },
// 	{ id: 10, src: "/home/SS-237.jpg", alt: "", ratio: 1.5 },
// 	{ id: 11, src: "/home/Sunrise-46.JPG", alt: "", ratio: 0.75 },
// ];
