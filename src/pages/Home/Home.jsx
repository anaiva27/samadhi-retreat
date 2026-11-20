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
import { useMediaQuery } from "../../helpers/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

import Transition from "../../components/Transition/Transition";
import { Slider } from "../../components/Slider/Slider";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import { SliderHero } from "../../components/SliderHero/SliderHero";
import { BiSolidQuoteLeft } from "react-icons/bi";

const Home = () => {
	const workItems = Array.isArray(workList) ? workList : [];
	const stickyTitlesRef = useRef(null);
	const stickyWorkHeaderRef = useRef(null);
	const homeWorkRef = useRef(null);
	const isMobile = useMediaQuery();

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
						<SliderHero />
						{/* <img
							src="/home/hero1.jpg"
							alt=""
						/> */}
					</div>

					<div className="hero-header">
						<AnimatedCopy
							tag="p"
							animateOnScroll={false}
							delay={1}
							className="primary sm"
						>
							<span
								style={{
									fontWeight: 600,
									letterSpacing: 1,
									color: "white",
									marginTop: 15,
								}}
							>
								Samadhi Si
								<span
									style={{
										fontWeight: 800,
										textShadow: "0px 0px 5px 5px #000000",
									}}
								>
									star
								</span>
								hood Retreats
							</span>
						</AnimatedCopy>
						<br />
						{isMobile ? (
							<>
								<AnimatedCopy
									tag="h1"
									animateOnScroll={false}
									delay={0.7}
								>
									Come for adventure
								</AnimatedCopy>
								<AnimatedCopy
									tag="h1"
									animateOnScroll={false}
									delay={0.8}
								>
									Stay for connection
								</AnimatedCopy>
							</>
						) : (
							<>
								<AnimatedCopy
									tag="h1"
									animateOnScroll={false}
									delay={0.7}
								>
									Come for adventure ...
								</AnimatedCopy>
								<AnimatedCopy
									tag="h1"
									animateOnScroll={false}
									delay={0.8}
								>
									... Stay for connection
								</AnimatedCopy>
							</>
						)}

						<AnimatedCopy
							tag="p"
							animateOnScroll={false}
							delay={1.1}
							className="primary sm hero-sm-padding"
						>
							<span
								style={{
									color: "white",
								}}
							>
								Remember, you are{" "}
								<span
									style={{
										fontFamily: "Zapfino",
										textTransform: "none",
										fontSize: "1.7rem",
										marginRight: "6px",
										fontWeight: 600,
										lineHeight: "300%",
									}}
								>
									magic!{" "}
								</span>{" "}
							</span>
						</AnimatedCopy>

						{isMobile ? (
							<div className="hero-button-wrapper">
								<button
									style={{ margin: "25px 0 0px", backgroundColor: "#171833" }}
									className="primary-button hero-home"
								>
									<Link
										className="hero-btn-link"
										to="/tulum"
									>
										Mexico
									</Link>
								</button>
								<button
									style={{ margin: "25px 0 0px", backgroundColor: "#2c1b1b" }}
									className="primary-button hero-home"
								>
									<Link
										className="hero-btn-link"
										to="/tulum"
									>
										Peru
									</Link>
								</button>
								<button
									style={{ margin: "25px 0 0px", backgroundColor: "#3f0505c3" }}
									className="primary-button hero-home"
								>
									<Link
										className="hero-btn-link"
										to="/tulum"
									>
										Guatemala
									</Link>
								</button>
							</div>
						) : (
							<div className="hero-button-wrapper">
								<button
									style={{ margin: "25px 0 0px", backgroundColor: "#171833" }}
									className="primary-button hero-home"
								>
									<Link
										className="hero-btn-link"
										to="/tulum"
									>
										Tulum - Mexico
									</Link>
								</button>
								<button
									style={{ margin: "25px 0 0px", backgroundColor: "#2c1b1b" }}
									className="primary-button hero-home"
								>
									<Link
										className="hero-btn-link"
										to="/tulum"
									>
										Sacred Valley - Peru
									</Link>
								</button>
								<button
									style={{ margin: "25px 0 0px", backgroundColor: "#3f0505c3" }}
									className="primary-button hero-home"
								>
									<Link
										className="hero-btn-link"
										to="/tulum"
									>
										Lake Atitlan - Guatemala
									</Link>
								</button>
							</div>
						)}
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
					{isMobile ? (
						<AnimatedCopy
							tag="h3"
							animateOnScroll={true}
							delay={0.1}
							id="sticky"
						>
							A sacred space where <br />
							women gather <br />
							and return <br />
							<br />
							<br />
							<span
								className="margin-top"
								style={{ fontFamily: "Zapfino" }}
							>
								radiant, supported,{" "}
								<span
									className="block"
									style={{ marginTop: 30, display: "block", height: 90 }}
								>
									balanced.
								</span>
							</span>
						</AnimatedCopy>
					) : (
						<AnimatedCopy
							tag="h3"
							animateOnScroll={true}
							delay={0.1}
							id="sticky"
							className="intro-width"
						>
							A sacred space where women gather and return <br />
							<br />
							<br />
							<span
								className="margin-top"
								style={{ fontFamily: "Zapfino" }}
							>
								radiant, supported,{" "}
								<span
									className="block"
									style={{ marginTop: 30, display: "block", height: 90 }}
								>
									balanced.
								</span>
							</span>
						</AnimatedCopy>
					)}

					<div className="sticky-work-logo">
						<img
							src="/home/Logo-updated.png"
							alt=""
						/>
					</div>
					<div className="sticky-titles-footer">
						<p className="primary sm">Celebrating</p>
						<p className="primary sm">Women</p>
					</div>
				</section>

				<section
					ref={homeWorkRef}
					className="home-work"
				>
					<div className="headline-wrapper-center">
						<h4>
							A restorative pause for the Woman who does it all — but feels
							disconnected inside.
						</h4>
					</div>
					<br />
					<br />
					<div className="home-work-list">
						{workItems.slice(0, 3).map((work) => (
							<div
								key={work.id}
								className="home-work-item"
							>
								<p className="primary sm">04 - 2025</p>
								<h4>{work.title}</h4>
								{work.quote && <p className="primary sm">{work.quote}</p>}

								<div className="work-item-img">
									<iframe
										// width="560"
										// height="315"
										src={work.video}
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
									></iframe>
								</div>
								{/* <p className="primary sm">{work.category}</p> */}
								<h5>{work.category}</h5>
							</div>
						))}
					</div>
					<br />
					<Link
						to="/testimonials"
						className="primary-button hero-btn-link"
					>
						more reviews
					</Link>
					<button
						style={{ margin: "5px auto 20px" }}
						className="primary-button"
						onClick={() =>
							window.open(
								"https://buy.stripe.com/aFaaEW41a07s69abZQ2wU17",
								"_blank",
								"noopener,noreferrer",
							)
						}
					>
						Place your deposit
					</button>
					<p className="secondary sm mobile-text-center">
						Payment plans available from Klarna, Affirm and Afterpay.
					</p>
				</section>

				<section
					ref={stickyWorkHeaderRef}
					className="home-header-padding"
				>
					<h3>
						Meet Marina and Amber.
						<br /> Your facilitators.
					</h3>
					<p className="secondary">
						The Women Behind the Retreats. &nbsp;Where Sisterhood Meets Purpose.
					</p>
				</section>

				<section className="services">
					<div className="home-host-img">
						<img
							className="rotate-img"
							src="/home/Sunrise-46.JPG"
							alt=""
						/>
						<img
							src="/home/IMG_3902.JPG"
							alt=""
						/>
					</div>
					<div className="home-host-content">
						<div className="home-host-text">
							<h4>Cherished Bond, Guided Sisterhood.</h4>
							<br />
							<p className="secondary">
								Soul sisters and seasoned retreat leaders, Marina and Amber
								bring a decade of friendship and proven experience as yoga
								teachers, movement educators, and space holders to every
								retreat.
								<br />
								<br />
								United by purpose, they have made a real difference in the lives
								of those they guide.
							</p>
						</div>
						<div className="home-host-text-sm">
							<h4 id="quote-home">
								<BiSolidQuoteLeft />
							</h4>
							<p className="secondary">
								“After more than a decade of coaching, we’ve learned that an
								authentic experience is what changes people. We help women start
								watering their own grass and come home to themselves.”
							</p>
						</div>
					</div>

					<div className="home-host-content">
						<div className="video-frame">
							<iframe
								src="https://www.youtube.com/embed/y-_pgybgKPo?si=UlVtE6g0kjZ0VM2H"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</div>

						<div className="home-host-text">
							<p className="secondary">
								Their shared commitment to meaningful change has touched the
								lives of everyone who joins them.
							</p>
						</div>
					</div>

					{/* <div className="intro">
						<p className="secondary md">
							Have you been pouring into everyone but yourself, and now your
							soul is whispering for rest, connection, and meaning?
						</p>
						<p className="secondary md">
							This is your invitation to pause. <br />
							To reset. To reconnect — with yourself, with sisterhood, and with
							the sacred.
						</p>
					</div> */}
				</section>

				<section className="button-wrapper-center">
					<button
						style={{ margin: "5px auto 20px" }}
						className="primary-button"
						onClick={() =>
							window.open(
								"https://buy.stripe.com/aFaaEW41a07s69abZQ2wU17",
								"_blank",
								"noopener,noreferrer",
							)
						}
					>
						Place your deposit
					</button>
					<p className="secondary sm mobile-text-center">
						Payment plans available from Klarna, Affirm and Afterpay.
					</p>
				</section>

				{!isMobile && (
					<div className="samadhi-banner">
						<img
							src="/home/collage.png"
							alt=""
						/>
					</div>
				)}

				<br />

				<section
					ref={stickyWorkHeaderRef}
					className="home-header-padding"
				>
					<h3>Why Samadhi?</h3>
					<p className="secondary">
						Because your journey deserves more than a getaway: a space to be
						supported, heard, and fully yourself.
						<br />
						An invitation and permission to soften, breathe, and belong.
					</p>
				</section>

				<section className="services">
					<div className="home-host-img">
						<img
							className="rotate-img"
							src="/home/SS-237.jpg"
							alt=""
						/>
						<img
							src="/home/1K3A8261.JPG"
							alt=""
						/>
					</div>
					<div className="home-host-content">
						<div className="home-host-text">
							<h4>
								We don't need another transformation. <br />
								{/* We don't need any more self-improvement. <br /> */}
								We just need each other.
							</h4>
							<br />
							<p className="secondary">
								In today's hectic world, many of us experience disconnection,
								navigating on autopilot through the burdens of stress, work,
								family responsibilities, and health challenges. Samadhi
								SiSTARhood creates immersive retreats where women take a pause,
								reconnect, and feel supported.
							</p>
						</div>
						<div className="home-host-text-sm">
							<p className="secondary">
								Samadhi SiSTARhood offers a space to move, rest, nurture your
								body, mind, and spirit through love, adventures and genuine
								connection.
							</p>
						</div>
					</div>
				</section>

				<section
					ref={stickyWorkHeaderRef}
					className="home-header-padding"
				>
					<h3 className="cursive-quote">And remember, you are magic!</h3>
				</section>

				<img
					height="1"
					width="1"
					style={{ display: "none" }}
					src="https://www.facebook.com/tr?id=1286718973548235&ev=PageView&noscript=1"
				/>

				<Reviews hasQuotes={true} />

				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(Home);
