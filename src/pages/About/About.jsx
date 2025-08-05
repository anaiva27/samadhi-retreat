import React from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const About = () => {
	return (
		<ReactLenis root>
			<div className="page about">
				<section className="about-header header-space">
					<h2>
						"We're all just walking each other home." <br />
						<span
							style={{
								fontFamily: "Zapfino",
								textTransform: "none",
								fontSize: "1rem",
								marginLeft: "-4px",
								fontWeight: 600,
							}}
						>
							- Ram Dass
						</span>
					</h2>
				</section>

				<p className=" headline">
					{" "}
					Meet Marina and Amber, <br />
					your facilitatiors
				</p>
				<section className="services">
					<div className="services-col">
						<img
							src="/about/women1.jpg"
							alt=""
						/>
					</div>
					<div className="services-col">
						<AnimatedCopy
							animateOnScroll={true}
							tag="h4"
							className=""
						>
							Marina and Amber's bond spans over a decade, evolving from friends
							and colleagues to what feels like soul sisters connected across
							countless lifetimes.
						</AnimatedCopy>
						<br />
						<AnimatedCopy
							animateOnScroll={true}
							tag="p"
							//className="primary"
						>
							United by a shared vision of life, wellness, and values, they have
							cultivated a community of empowered, open-minded individuals.
							Their combined commitment to making a meaningful impact on
							people's lives has been remarkable.
						</AnimatedCopy>
					</div>
				</section>

				<section className="services">
					<div className="">
						<div className="about-banner">
							<img
								src="/about/IMG3.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="services-col">
						<AnimatedCopy
							animateOnScroll={true}
							tag="p"
							//className="primary"
						>
							Now, they invite others to join them for an unforgettable
							experience — Women’s retreat that promises to nurture physical,
							emotional, and spiritual well-being amidst the mystical landscape
							of Peru.
						</AnimatedCopy>
					</div>
				</section>

				<div className="page about">
					<section className="about-header">
						<br />
						<h2>Guest Facilitators</h2>
					</section>

					<p className=" headline"> Meet Susanna</p>
					<section className="services">
						<div className="services-col">
							<img
								src="/about/susanna.jpeg"
								alt=""
							/>
						</div>
						<div className="services-col">
							<AnimatedCopy
								animateOnScroll={true}
								tag="h4"
								className=""
							>
								Susanna – a transformational life coach, certified breathwork
								facilitator, and devoted student, and corporate trainer, of Dr.
								Joe Dispenza’s work. With a global background in the corporate
								tech world, she deeply understands the pressure, burnout, and
								identity loss many high-achieving people face.
							</AnimatedCopy>
							<br />
							<AnimatedCopy
								animateOnScroll={true}
								tag="p"
								//className="primary"
							>
								Susanna combines science-backed neuroscience and mindset tools
								with somatic healing practices like meditation, breathwork, and
								intentional journaling to help men and women break through
								limiting beliefs and reconnect with their true selves. <br />
								<br />
								She’s also the creator of the Manifestation Journal
								‘Intentions’, and the visionary behind retreats designed to
								rewire old patterns, regulate the nervous system, and create
								lasting transformation from the inside out.
							</AnimatedCopy>
						</div>
					</section>
				</div>

				<div className="page about">
					<br />
					<p className=" headline"> Meet Yulia</p>
					<section className="services">
						<div className="services-col">
							<img
								src="/about/yulia.JPG"
								alt=""
							/>
						</div>
						<div className="services-col">
							<AnimatedCopy
								animateOnScroll={true}
								tag="h4"
								className=""
							>
								Yulia is an art and mindfulness educator with over 15 years of
								global experience as an art curator. Eight years ago, she
								discovered Human Design and began incorporating mindfulness
								practices to gain deeper insights into her own path and better
								serve others.
							</AnimatedCopy>
							<br />
							<AnimatedCopy
								animateOnScroll={true}
								tag="p"
								//className="primary"
							>
								Four years ago, Yulia moved to Mexico, where she immersed
								herself in ancient traditions and techniques related to the four
								elements and spiritual temazcal, actively engaging with the
								local community.
								<br />
								<br /> She is a Sun-Dancer in Lakota traditions, a Human Design
								and Genetic Keys reader, a dedicated Vipassana meditator, a
								Reiki Master, and an art historian. Yulia's mission is to
								empower women by blending ancient and contemporary mindfulness
								tools to achieve transformative results.
							</AnimatedCopy>
						</div>
					</section>
				</div>

				<section className="sticky-work-header">
					<AnimatedCopy
						tag="h1"
						animateOnScroll="true"
					>
						<div className="sticky-work-print">
							<img
								src="/home/Logo-updated.png"
								alt=""
							/>
						</div>
					</AnimatedCopy>
					<h3>Welcome to women’s retreat at the magical land of Peru.</h3>
				</section>

				<div className="page about">
					<section className="services">
						<div className="services-col">
							<img
								src="/about/women4.jpg"
								alt=""
							/>
						</div>
						<div className="services-col">
							<AnimatedCopy
								animateOnScroll={true}
								tag="h4"
								className=""
							>
								Where women come home to themselves.{" "}
							</AnimatedCopy>
							<AnimatedCopy
								animateOnScroll={true}
								tag="p"
								//className="primary"
							>
								We chose Samadhi Retreat Center for its deep connection to
								nature, spirit, and tradition. Nestled in the heart of Peru’s
								Sacred Valley within a native farming community, it offers a
								powerful setting for transformation—surrounded by mountains,
								ancient temples, and living culture.
							</AnimatedCopy>
						</div>
						<button
							className="primary-button"
							onClick={() =>
								window.open(
									"https://book.stripe.com/14AfZgbtCdYigNOfc22wU0S",
									"_blank",
									"noopener,noreferrer"
								)
							}
						>
							Reserve your spot
						</button>
						<div className="services-col">
							<img
								src="/about/marina-amber.jpeg"
								alt=""
							/>
						</div>
					</section>
				</div>

				<ContactForm />

				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(About);
