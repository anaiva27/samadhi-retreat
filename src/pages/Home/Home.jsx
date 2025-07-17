import workList from "../../data/workList";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Reviews from "../../components/Reviews/Reviews";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

import Transition from "../../components/Transition/Transition";
import { Slider } from "../../components/Slider/Slider";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

const Home = () => {
	const workItems = Array.isArray(workList) ? workList : [];
	const stickyTitlesRef = useRef(null);
	const titlesRef = useRef([]);
	const stickyWorkHeaderRef = useRef(null);
	const homeWorkRef = useRef(null);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		ScrollTrigger.refresh();
	// 	};

	// 	window.addEventListener("resize", handleResize);

	// 	const stickySection = stickyTitlesRef.current;
	// 	const titles = titlesRef.current.filter(Boolean);

	// 	if (!stickySection || titles.length !== 5) {
	// 		window.removeEventListener("resize", handleResize);
	// 		return;
	// 	}

	// 	gsap.set(titles[0], { opacity: 1, scale: 1 });
	// 	gsap.set(titles[1], { opacity: 0, scale: 0.75 });
	// 	gsap.set(titles[2], { opacity: 0, scale: 0.75 });
	// 	gsap.set(titles[3], { opacity: 0, scale: 0.75 });
	// 	gsap.set(titles[4], { opacity: 0 });

	// 	const pinTrigger = ScrollTrigger.create({
	// 		trigger: stickySection,
	// 		start: "top top",
	// 		end: `+=${window.innerHeight * 5}`,
	// 		pin: true,
	// 		pinSpacing: true,
	// 	});

	// 	const masterTimeline = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: stickySection,
	// 			start: "top top",
	// 			end: `+=${window.innerHeight * 4}`,
	// 			scrub: 0.5,
	// 		},
	// 	});

	// 	masterTimeline
	// 		.to(
	// 			titles[0],
	// 			{
	// 				opacity: 0,
	// 				scale: 0.75,
	// 				duration: 0.3,
	// 				ease: "power2.out",
	// 			},
	// 			1
	// 		)
	// 		.to(
	// 			titles[1],
	// 			{
	// 				opacity: 1,
	// 				scale: 1,
	// 				duration: 0.3,
	// 				ease: "power2.in",
	// 			},
	// 			1.25
	// 		);

	// 	masterTimeline
	// 		.to(
	// 			titles[1],
	// 			{
	// 				opacity: 0,
	// 				scale: 0.75,
	// 				duration: 0.3,
	// 				ease: "power2.out",
	// 			},
	// 			2.5
	// 		)
	// 		.to(
	// 			titles[2],
	// 			{
	// 				opacity: 1,
	// 				scale: 1,
	// 				duration: 0.3,
	// 				ease: "power2.in",
	// 			},
	// 			2.75
	// 		);

	// 	masterTimeline
	// 		.to(
	// 			titles[2],
	// 			{
	// 				opacity: 0,
	// 				scale: 0.75,
	// 				duration: 0.3,
	// 				ease: "power2.out",
	// 			},
	// 			4
	// 		)
	// 		.to(
	// 			titles[3],
	// 			{
	// 				opacity: 1,
	// 				duration: 0.3,
	// 				ease: "power2.in",
	// 			},
	// 			4.25
	// 		);

	// 	masterTimeline
	// 		.to(
	// 			titles[3],
	// 			{
	// 				opacity: 0,
	// 				scale: 0.75,
	// 				duration: 0.3,
	// 				ease: "power2.out",
	// 			},
	// 			6
	// 		)
	// 		.to(
	// 			titles[4],
	// 			{
	// 				opacity: 1,
	// 				duration: 0.4,
	// 				ease: "power2.in",
	// 			},
	// 			6.4
	// 		);

	// 	const workHeaderSection = stickyWorkHeaderRef.current;
	// 	const homeWorkSection = homeWorkRef.current;

	// 	let workHeaderPinTrigger;
	// 	if (workHeaderSection && homeWorkSection) {
	// 		workHeaderPinTrigger = ScrollTrigger.create({
	// 			trigger: workHeaderSection,
	// 			start: "top top",
	// 			endTrigger: homeWorkSection,
	// 			end: "bottom bottom",
	// 			pin: true,
	// 			pinSpacing: false,
	// 		});
	// 	}

	// 	return () => {
	// 		pinTrigger.kill();
	// 		if (workHeaderPinTrigger) {
	// 			workHeaderPinTrigger.kill();
	// 		}
	// 		if (masterTimeline.scrollTrigger) {
	// 			masterTimeline.scrollTrigger.kill();
	// 		}
	// 		masterTimeline.kill();
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);

	return (
		<ReactLenis root>
			<div className="page home">
				<section className="hero">
					<div className="hero-img">
						<img
							src="/home/hero1.jpg"
							alt=""
						/>
					</div>

					<div className="hero-header">
						<AnimatedCopy
							tag="h1"
							animateOnScroll={false}
							delay={0.7}
						>
							Samadhi
						</AnimatedCopy>
						<AnimatedCopy
							tag="h1"
							animateOnScroll={false}
							delay={0.8}
						>
							Sistarhood
						</AnimatedCopy>
						<AnimatedCopy
							tag="h1"
							animateOnScroll={false}
							delay={0.9}
						>
							Retreats
						</AnimatedCopy>
						<AnimatedCopy
							tag="p"
							animateOnScroll={false}
							delay={1}
							className="primary sm"
						>
							<span
								style={{ fontWeight: 200, letterSpacing: 1, color: "white" }}
							>
								September 19th - 25th, 2026
							</span>
						</AnimatedCopy>
						<br />
						<AnimatedCopy
							tag="p"
							animateOnScroll={false}
							delay={1.1}
							className="primary sm"
						>
							<span
								style={{ fontWeight: 200, letterSpacing: 1, color: "white" }}
							>
								Where{" "}
								<span
									style={{
										fontFamily: "Zapfino",
										textTransform: "none",
										fontSize: "1rem",
										marginLeft: "-4px",
									}}
								>
									women{" "}
								</span>{" "}
								Come Home to Themselves
							</span>
						</AnimatedCopy>
					</div>
				</section>
				<section
					ref={stickyTitlesRef}
					className="sticky-titles"
				>
					<div className="sticky-titles-nav">
						<p className="primary sm">About Us</p>
						<p className="primary sm">Let’s Connect</p>
					</div>

					{/* <h2 ref={(el) => (titlesRef.current[0] = el)}>
						What would it be like living your life as a celebration?
					</h2>
					<h2 ref={(el) => (titlesRef.current[1] = el)}>
						To get in touch with your sacred feminine power?
					</h2>
					<h2 ref={(el) => (titlesRef.current[2] = el)}>
						Welcome to women’s retreat at the magical land of Peru.
					</h2> */}
					<h3
						id="sticky"
						ref={(el) => (titlesRef.current[3] = el)}
					>
						Where we offer a pathway to <br />
						dissolve emotional barriers <br />
						and awaken
						<br />
						<br />
						<span style={{ fontFamily: "Zapfino" }}>
							the blissful woman{" "}
							<span style={{ marginTop: 30, display: "block" }}>
								within you.
							</span>
						</span>
					</h3>
					{/* <img
						ref={(el) => (titlesRef.current[4] = el)}
						className="explore-img"
						src="/home/explore-img-2.png"
						alt=""
						/> */}
					<div className="sticky-work-logo">
						<img
							src="/home/logo-1.png"
							alt=""
						/>
					</div>
					<div className="sticky-titles-footer">
						<p className="primary sm">Celebrating</p>
						<p className="primary sm">Women</p>
					</div>
				</section>
				{/* <section className="video-frame">
					<iframe
						src="video/v3.mp4"
						width={"40%"}
						height={"100%"}
						loading="lazy"
						frameBorder="0"
						allowFullScreen
						title="Local Video Player"
					></iframe>
					<iframe
						src="video/v2.mp4"
						width={"40%"}
						height={"100%"}
						loading="lazy"
						frameBorder="0"
						allowFullScreen
						title="Local Video Player"
					></iframe>
				</section> */}
				<section
					ref={stickyWorkHeaderRef}
					className="sticky-work-header"
				>
					<div className="intro">
						<p className="primary sm">
							What would it be like <br />
							living your life as a celebration?
						</p>
						<p className="primary sm">
							To get in touch with your sacred feminine power?
						</p>
					</div>
					<div className="peru-banner">
						<img
							src="/home/wallpaper1.jpeg"
							alt=""
						/>
					</div>
					<h3>Welcome to women’s retreat at the magical land of Peru.</h3>
					<AnimatedCopy
						tag="h1"
						animateOnScroll="true"
					>
						<div className="sticky-work-print">
							<img
								src="/home/logo-1.png"
								alt=""
							/>
						</div>
					</AnimatedCopy>
				</section>

				<section className="services">
					<div className="services-col">
						<div className="services-banner">
							<img
								src="/home/img3-1.jpg"
								alt=""
							/>
							<p className="primary sm text-shadow">
								This is more than just a retreat
							</p>
						</div>
					</div>
					<div className="services-col">
						<h4 style={{ textAlign: "center" }}>
							It’s an invitation to step into a life where joy, connection, and
							love flow effortlessly.
						</h4>{" "}
						<h5 style={{ textAlign: "center" }}>
							Come, embrace your fullest expression and let the adventure of
							your soul unfold!
						</h5>
						<br /> <br />
						<h5 style={{ textAlign: "center" }}>
							This is a retreat for women who:
						</h5>
						<br />
						<div className="services-list">
							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<p className="primary sm">
										...feel the pull to take a sacred pause: a full week to
										nourish and replenish their body, mind, and spirit.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<p className="primary sm">
										...are longing to experience more fulfillment, to reignite
										their passions, and embrace the playful, adventurous spirit
										within them.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<p className="primary sm">
										...are ready to cultivate a deep, abiding love within their
										bodies, reconnecting with their natural beauty, strength,
										and grace.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<p className="primary sm">
										...are seeking a journey of transformation, where the wild,
										free-spirited essence of their feminine power can bloom in
										full expression.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="intro2">
					<h4>
						Surrounded by the loving embrace of sisterhood and the sacred
						presence of Mother Earth.
					</h4>
					<h5>
						This retreat is a space where you can rediscover your truest
						self—unfiltered, untamed, and radiant.
					</h5>
				</section>

				<section
					ref={homeWorkRef}
					className="home-work"
				>
					<div className="home-work-list">
						{workItems.slice(0, 3).map((work) => (
							<Link
								to="/sample-project"
								key={work.id}
								className="home-work-item"
							>
								<p className="primary sm">04 - 2025</p>
								<h3>{work.title}</h3>
								<div className="work-item-img">
									<iframe
										// width="560"
										// height="315"
										src={work.video}
										title="YouTube video player"
										frameborder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
										referrerpolicy="strict-origin-when-cross-origin"
										allowfullscreen
									></iframe>
								</div>
								<h4>{work.category}</h4>
							</Link>
						))}
					</div>
					<Link
						to="/feedback"
						className="primary-button"
					>
						more reviews
					</Link>
				</section>

				<p
					className="primary "
					style={{ textAlign: "center" }}
				>
					What is included:
				</p>
				<section className="services home">
					<Slider />
					<div className="service-list-col">
						<h4>
							A Transformational Experience to gain clarity as you clear blocks
							holding you back
						</h4>

						<div className="service-list">
							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>6 nights</h5>
								</div>
								<p className="primary sm">
									shared accommodation in chakra bungalows, a restful sanctuary
									to align your soul.
								</p>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>3 nourishing organic meals</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm"> to energize and heal.</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Full Access</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										to serene amenities, including jacuzzi and chakra garden.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>TEMAZCAL CEREMONY</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										to release and renew your spirit.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Cacao CEREMONY</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										and ecstatic dance to awaken joy within.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Bonfire circle</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										for heartfelt sharing and connection.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Daily movement</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										yoga and mobility, meditation, and journaling to ground and
										center
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Trip to Pisac town</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										and sound healing with local practitioner.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Breathwork session</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm"> to release and let go.</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Tour to Moray and Maras</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										to explore ancient wisdom and beauty.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Sacred mandala creation</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">to express your inner artist.</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Shuttle service</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										from Cusco airport for a seamless journey.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>Zoom prep call</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm">
										and a month of integration through virtual classes.
									</p>
								</div>
							</div>

							<div className="service-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 30,
										height: 30,
										margin: "auto",
									}}
								/>
								<div className="service-list-col">
									<h5>A personalized gift bag</h5>
								</div>
								<div className="service-list-col">
									<p className="primary sm"> to honor your journey.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<p
					className="primary "
					style={{ textAlign: "center" }}
				>
					Why Samadhi:
				</p>
				<section className="intro-samadhi">
					<img
						src="/home/wellness-retreats-in-peru.webp"
						alt=""
					/>

					<div className="intro-samadhi-col">
						<h4>
							In today's hectic world, many of us experience disconnection,
							navigating on autopilot through the burdens of stress, work,
							family responsibilities, and health challenges.
						</h4>
						<p>
							Samadhi is a serene and eco-conscious retreat center situated in
							the Andes Mountains of Sacred Valley, Peru. Founded by mindful
							individuals, it serves as a sanctuary for healing, sacred
							reciprocity, and communion with Pacha Mama (Mother Earth) and the
							Divine.
						</p>
						<p>
							Built with heartfelt intention, the center cultivates organic
							vegetables on-site, prepares food with blessings, and fosters a
							warm and inviting atmosphere where joy, connection, and deep
							healing thrive.
						</p>
						<h5>
							Samadhi Center at the sacred land of Peru is an ideal destination
							for your next journey — a journey focused on cultural immersion,
							awe-inspiring nature, embodying feminine practices,
							self-nourishment, and hitting the reset button in our busy lives.
						</h5>
					</div>
				</section>
				<Reviews hasQuotes={true} />

				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(Home);
