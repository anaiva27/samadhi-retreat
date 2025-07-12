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
				<section className="about-header">
					<h1>"Beauty is in the eye of the beholder"</h1>
				</section>

				<p className=" headline"> Meet your facilitatiors</p>
				<section className="about-hero">
					<div className="about-hero-img">
						<img
							src="/about/women1.jpg"
							alt=""
						/>
					</div>
				</section>

				<section className="about-me-copy">
					<div className="about-me-copy-wrapper">
						<AnimatedCopy
							animateOnScroll={true}
							tag="p"
							className=""
						>
							Marina and Amber's bond spans over a decade, evolving from friends
							and colleagues to what feels like soul sisters connected across
							countless lifetimes.
						</AnimatedCopy>
						<AnimatedCopy
							animateOnScroll={true}
							tag="p"
						>
							United by a shared vision of life, wellness, and values, they have
							cultivated a community of empowered, open-minded individuals.
							Their combined commitment to making a meaningful impact on
							people's lives has been remarkable.
						</AnimatedCopy>
					</div>
				</section>

				<section className="services">
					<div className="services-col">
						<div className="services-banner">
							<img
								src="/about/IMG3.jpg"
								alt=""
							/>
						</div>
						<p className="primary">Crafted with Intention</p>
					</div>
					<div className="services-col">
						<h4>
							Now, they invite others to join them for an unforgettable
							experience — Women’s retreat that promises to nurture physical,
							emotional, and spiritual well-being amidst the mystical landscape
							of Peru.
						</h4>

						{/* <div className="services-list">
							<div className="service-list-row">
								<div className="service-list-col">
									<h5>Filmmaking</h5>
								</div>
								<div className="service-list-col">
									<p>
										From short films to personal narratives, my work is driven
										by emotion and atmosphere. I handle direction,
										cinematography, and editing — crafting each piece with a
										filmmaker’s eye for mood, movement, and meaning.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<div className="service-list-col">
									<h5>Visual Storytelling</h5>
								</div>
								<div className="service-list-col">
									<p>
										I create visuals that speak — whether it’s a quiet moment or
										a bold idea. My work blends aesthetic choices with story
										clarity, making sure the emotional core always comes
										through.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<div className="service-list-col">
									<h5>Creative Direction</h5>
								</div>
								<div className="service-list-col">
									<p>
										From ideation to final cut, I guide the visual and narrative
										tone of every project. I bring a cohesive, cinematic vision
										that aligns story, style, and intention — grounded in
										authenticity.
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</section>

				{/* <section className="about-banner-img">
					<div className="about-banner-img-wrapper">
						<img
							src="/about/about-banner.jpg"
							alt=""
						/>
					</div>
				</section>

				<section className="fav-tools">
					<div className="fav-tools-header">
						<AnimatedCopy
							tag="p"
							animateOnScroll={true}
							className="primary sm"
						>
							Daily Stack
						</AnimatedCopy>
						<AnimatedCopy
							tag="h2"
							animateOnScroll={true}
							delay={0.25}
						>
							Favourite Tools
						</AnimatedCopy>
						<AnimatedCopy
							tag="p"
							animateOnScroll={true}
							className="secondary"
							delay={0.5}
						>
							My favorite stack includes Framer, Figma, and other cutting-edge
							technologies to ensure seamless and dynamic designs.
						</AnimatedCopy>
					</div>

					<div className="fav-tools-list">
						<div className="fav-tools-list-row">
							<div className="fav-tool">
								<div className="fav-tool-img">
									<img
										src="/about/tool-1.jpg"
										alt=""
									/>
								</div>
								<h4>DaVinci Resolve</h4>
								<p className="primary sm">Color Grading</p>
							</div>
							<div className="fav-tool">
								<div className="fav-tool-img">
									<img
										src="/about/tool-2.jpg"
										alt=""
									/>
								</div>
								<h4>Adobe Premiere Pro</h4>
								<p className="primary sm">Video Editing</p>
							</div>
							<div className="fav-tool">
								<div className="fav-tool-img">
									<img
										src="/about/tool-3.jpg"
										alt=""
									/>
								</div>
								<h4>Blackmagic Pocket</h4>
								<p className="primary sm">Cinematic Shooting</p>
							</div>
						</div>
						<div className="fav-tools-list-row">
							<div className="fav-tool">
								<div className="fav-tool-img">
									<img
										src="/about/tool-4.jpg"
										alt=""
									/>
								</div>
								<h4>ShotDeck</h4>
								<p className="primary sm">Visual References</p>
							</div>
							<div className="fav-tool">
								<div className="fav-tool-img">
									<img
										src="/about/tool-5.jpg"
										alt=""
									/>
								</div>
								<h4>Frame.io</h4>
								<p className="primary sm">Remote Collaboration</p>
							</div>
							<div className="fav-tool">
								<div className="fav-tool-img">
									<img
										src="/about/tool-6.jpg"
										alt=""
									/>
								</div>
								<h4>Celtx</h4>
								<p className="primary sm">Scriptwriting Tool</p>
							</div>
						</div>
					</div>
				</section> */}

				<ContactForm />

				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(About);
