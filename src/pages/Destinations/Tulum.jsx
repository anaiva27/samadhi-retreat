import React from "react";
import "./Destinations.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import StarSm from "../../components/Star/StarSm";
import Spotify from "../../components/SpotifyPlaylist/Spotify";
import { useMediaQuery } from "../../helpers/useMediaQuery";
import { SliderTulum } from "../../components/SliderTulum/sliderTulum";
import Masonry from "../../components/Masonry/Masonry";

const Tulum = () => {
	const isMobile = useMediaQuery();
	return (
		<ReactLenis root>
			<div className="page destinations">
				<section className="destinations-hero">
					<div className="destinations-hero-wrapper">
						<div className="destinations-hero-content">
							<div className="tulum-hero-content">
								<AnimatedCopy
									tag="p"
									animateOnScroll={false}
									delay={0.7}
									className="primary sm"
								>
									<span
										style={{
											fontWeight: 600,
											letterSpacing: 1,
										}}
									>
										February 19–25, 2027. Tulum, Mexico.
									</span>
								</AnimatedCopy>

								<br />
								{isMobile ? (
									<>
										<AnimatedCopy
											tag="h2"
											animateOnScroll={false}
											delay={1.2}
										>
											Reconnect. Recharge.
										</AnimatedCopy>

										<AnimatedCopy
											tag="h2"
											animateOnScroll={false}
											delay={1.4}
										>
											Rediscover.
										</AnimatedCopy>
										<AnimatedCopy
											tag="p"
											animateOnScroll={false}
											delay={1.6}
											className="secondary md"
										>
											<span
												style={{ margin: "20px 0 30px 0", maxWidth: "650px" }}
											>
												Meaningful connection and moments of adventure, set
												against the natural beauty of the Caribbean coast.
											</span>
										</AnimatedCopy>
										<AnimatedCopy
											tag="p"
											animateOnScroll={false}
											delay={1.8}
											className="primary sm hero-sm-padding"
										>
											You deserve this. <br />
											Remember, you are{" "}
											<span
												style={{
													fontFamily: "Zapfino",
													textTransform: "none",
													fontSize: "1.3rem",
													marginRight: "6px",
													fontWeight: 600,
													lineHeight: "300%",
													marginBottom: 20,
												}}
											>
												magic!{" "}
											</span>{" "}
										</AnimatedCopy>
										<button
											style={{ margin: "15px auto 20px 0" }}
											className="primary-button"
											onClick={() =>
												window.open(
													"https://buy.stripe.com/7sY5kCeFO7zUfJK5Bs2wU0X",
													"_blank",
													"noopener,noreferrer",
												)
											}
										>
											Place your deposit
										</button>
									</>
								) : (
									<>
										<AnimatedCopy
											tag="h2"
											animateOnScroll={false}
											delay={1.2}
										>
											Reconnect. Recharge.
										</AnimatedCopy>

										<AnimatedCopy
											tag="h2"
											animateOnScroll={false}
											delay={1.4}
										>
											Rediscover.
										</AnimatedCopy>
										<AnimatedCopy
											tag="p"
											animateOnScroll={false}
											delay={1.6}
											className="secondary md"
										>
											<span
												style={{ margin: "20px 0 0px 0", maxWidth: "650px" }}
											>
												Meaningful connection and moments of adventure, set
												against the natural beauty of the Caribbean coast.
											</span>
										</AnimatedCopy>
										<AnimatedCopy
											tag="p"
											animateOnScroll={false}
											delay={1.8}
											className="primary sm hero-sm-padding"
										>
											You deserve this. Remember, you are{" "}
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
										</AnimatedCopy>
										<button
											style={{ margin: "15px auto 20px 0" }}
											className="primary-button"
											onClick={() =>
												window.open(
													"https://buy.stripe.com/7sY5kCeFO7zUfJK5Bs2wU0X",
													"_blank",
													"noopener,noreferrer",
												)
											}
										>
											Place your deposit
										</button>
									</>
								)}

								{/* <p className="secondary sm mobile-text-center">
									Payment plans available from Klarna, Affirm and Afterpay.
								</p> */}
							</div>
						</div>

						<div className="destinations-hero-slider">
							<SliderTulum />
						</div>
					</div>
				</section>

				<div className="padding-wrapper">
					<section className="tulum-header">
						<h3>Enjoy our select ceremonies and experiences.</h3>
						<br />
						<p className="center-text headline">
							Seven days at our luxury villa, with movement, restoration and
							connection woven into each day.
						</p>
						<br />
					</section>

					<section className="tulum-included">
						<div className="tulum-included-content ">
							<div className="tulum-host-text">
								<div className="schedule-list-row">
									<div className="line-vertical"></div>
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
									<div className="schedule-list-col">
										<h5>What's Included:</h5>
									</div>
									<div className="schedule-list-col">
										<p className="primary sm">
											<StarSm /> Authentic jungle temazcal ceremony
											<br />
											<StarSm /> Cenote tour and underwater photo session
											<br />
											<StarSm /> Beach club day
											<br />
											<StarSm /> Lagoon and cenote visits
											<br />
											<StarSm /> Private salsa lesson
											<br />
											<StarSm /> Goddess photoshoot
											<br />
											<StarSm /> Sound-healing ceremony
											<br />
											<StarSm /> Personalized gift bag
										</p>
									</div>
								</div>
								<div className="schedule-list-row">
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
								</div>
							</div>
							<div className="tulum-host-text-sm">
								<div className="schedule-list-row">
									<div className="line-vertical"></div>
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
									<div className="schedule-list-col">
										<h5>Also Included:</h5>
									</div>
									<div className="schedule-list-col">
										<p className="primary sm">
											<StarSm /> Daily yoga, functional strength classes
											<br />
											<StarSm /> Mobility and myofascial-release classes
											<br />
											<StarSm /> Sauna, cold plunge and gym access
											<br />
											<StarSm /> Most meals prepared by our private chef
											<br />
											<StarSm /> Shared or single-occupancy accommodations
											<br />
											<StarSm /> Water, tea, coffee, fresh fruit and snacks
											<br />
											<StarSm /> Round-trip airport shuttle and retreat
											transportation
											<br />
											<StarSm /> Payment plans available for up to 12 months.
										</p>
									</div>
								</div>
								<div className="schedule-list-row">
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
								</div>
							</div>
						</div>
					</section>

					<section className="tulum-header">
						<h3>"Tulum is a feeling..."</h3>
						<br />
						<p className="center-text headline">
							A blend of nature, culture, nourishment and connection.
						</p>
						<br />
					</section>

					<section className="masonry">
						<Masonry />
					</section>

					<section className="tulum-pricing-section">
						<div className="tulum-pricing-content ">
							<div className="tulum-host-text">
								<h4 className="price-headline">Retreat Investment Options</h4>

								<div className="schedule-list-row">
									<div className="line-vertical"></div>
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
									<div className="schedule-list-col">
										<h5>$3,199 USD</h5>
									</div>
									<div className="schedule-list-col">
										<p className="primary sm">
											<StarSm /> Single Occupancy
											<br />
											<StarSm /> Master Bedroom
											<br />
											<StarSm /> King-size bed, your own bathroom.
											<br />
										</p>
									</div>
								</div>
								<div className="schedule-list-row">
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
								</div>
							</div>
							<div className="tulum-host-text-sm">
								<div className="schedule-list-row">
									<div className="line-vertical"></div>
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
									<div className="schedule-list-col">
										<h5>$2,799 USD</h5>
									</div>
									<div className="schedule-list-col">
										<p className="primary sm">
											<StarSm /> Shared room
											<br />
											<StarSm /> king-size bed
											<br />
											<StarSm /> An inviting option for girlfriends, sisters or
											mother and daughter.
										</p>
									</div>
								</div>
								<div className="schedule-list-row">
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
								</div>
							</div>
						</div>
					</section>

					<section className="sticky-work-header">
						<button
							style={{ margin: "auto" }}
							className="primary-button"
							onClick={() =>
								window.open(
									"https://buy.stripe.com/7sY5kCeFO7zUfJK5Bs2wU0X",
									"_blank",
									"noopener,noreferrer",
								)
							}
						>
							Place your deposit
						</button>
						<br />
						<p className="secondary sm">
							Payment plans available from Klarna, Affirm and Afterpay.
						</p>
					</section>

					<section className="tulum-schedule-section">
						<h3 className="center-text headline center">Tentative schedule:</h3>
						<p className="center-text headline">February 19–25, 2027.</p>

						<div className="schedule-list">
							<div className="schedule-list-row">
								<div className="line-vertical"></div>
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 50,
										height: 60,
										marginRight: "auto",
									}}
								/>
								<div className="schedule-list-col">
									<h5>Day 1. Arrival</h5>
								</div>
								<div className="schedule-list-col">
									<p className="primary sm">
										<StarSm /> Pick up from the airport
										<br />
										<StarSm /> Arrival to the villa
										<br />
										<StarSm /> Snacks, tea, coffee available
										<br />
										<StarSm /> Opening circle + setting intention
										<br />
										<StarSm /> Dinner
									</p>
								</div>
							</div>

							<div className="schedule-list-row">
								<div className="line-vertical"></div>
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 50,
										height: 60,
										marginRight: "auto",
									}}
								/>
								<div className="schedule-list-col">
									<h5>Day 2.</h5>
								</div>
								<div className="schedule-list-col">
									<p className="primary sm">
										{" "}
										<StarSm /> Morning Yoga
										<br />
										<StarSm /> Breakfast
										<br />
										<StarSm /> Cenotes exploration
										<br />
										<StarSm /> Free Time
										<br />
										<StarSm /> Restorative yoga
										<br />
										<StarSm /> Dinner
										<br />
										<StarSm /> herbal tea and journaling
									</p>
								</div>
							</div>

							<div className="schedule-list-row">
								<div className="line-vertical"></div>
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 50,
										height: 60,
										marginRight: "auto",
									}}
								/>
								<div className="schedule-list-col">
									<h5>Day 3.</h5>
								</div>
								<div className="schedule-list-col">
									<p className="primary sm">
										{" "}
										<StarSm /> Hip mobility class
										<br />
										<StarSm /> Breakfast
										<br />
										<StarSm /> beach club day
										<br />
										<StarSm /> sound healing
										<br />
										<StarSm /> Dinner
										<br />
										<StarSm /> herbal tea and games
									</p>
								</div>
							</div>
							<div className="schedule-list-row">
								<div className="line-vertical"></div>
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 50,
										height: 60,
										marginRight: "auto",
									}}
								/>
								<div className="schedule-list-col">
									<h5>Day 4.</h5>
								</div>
								<div className="schedule-list-col">
									<p className="primary sm">
										{" "}
										<StarSm /> Traditional temazcal ceremony in the jungle
										<br />
										<StarSm /> cave cenote
										<br />
										<StarSm /> Lunch
										<br />
										<StarSm /> myofascial release class
										<br />
										<StarSm /> Dinner
									</p>
								</div>
							</div>
							<div className="schedule-list-row">
								<div className="line-vertical"></div>
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 50,
										height: 60,
										marginRight: "auto",
									}}
								/>
								<div className="schedule-list-col">
									<h5>Day 5.</h5>
								</div>
								<div className="schedule-list-col">
									<p className="primary sm">
										{" "}
										<StarSm /> HIIT class
										<br />
										<StarSm /> Breakfast
										<br />
										<StarSm /> lagoon day
										<br />
										<StarSm /> private salsa class
										<br />
										<StarSm /> Dinner
									</p>
								</div>
							</div>
							<div className="schedule-list-row">
								<div className="line-vertical"></div>
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 50,
										height: 60,
										marginRight: "auto",
									}}
								/>
								<div className="schedule-list-col">
									<h5>Day 6.</h5>
								</div>
								<div className="schedule-list-col">
									<p className="primary sm">
										{" "}
										<StarSm /> Goddess photoshoot
										<br />
										<StarSm /> beach club
										<br />
										<StarSm /> spine mobility class
										<br />
										<StarSm /> Dinner
										<br />
										<StarSm /> closing circle
									</p>
								</div>
							</div>
							<div className="schedule-list-row">
								<div className="line-vertical"></div>
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 50,
										height: 60,
										marginRight: "auto",
									}}
								/>
								<div className="schedule-list-col">
									<h5>Day 7.</h5>
								</div>
								<div className="schedule-list-col">
									<p className="primary sm">
										{" "}
										<StarSm /> final yoga class
										<br />
										<StarSm /> Breakfast
										<br />
										<StarSm /> transfer to airport
									</p>
								</div>
							</div>
							<div className="schedule-list-row">
								<img
									src="/home/star1.png"
									alt=""
									style={{
										display: "inline",
										width: 50,
										height: 60,
										marginRight: "auto",
									}}
								/>
							</div>
						</div>
					</section>

					<section className="tulum-pricing-section">
						<div className="tulum-pricing-content ">
							<div className="tulum-host-text">
								<div className="schedule-list-row">
									<div className="line-vertical"></div>
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
									<div className="schedule-list-col">
										<h5>Not Included</h5>
									</div>
									<div className="schedule-list-col">
										<p className="primary sm">
											<StarSm /> Airfare <br />
											<StarSm /> travel insurance <br />
											<StarSm /> bodywork services <br />
											<StarSm /> select lunches while out.
										</p>
									</div>
								</div>
								<div className="schedule-list-row">
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
								</div>
							</div>
							<div className="tulum-host-text-sm">
								<div className="schedule-list-row">
									<div className="line-vertical"></div>
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
									<div className="schedule-list-col">
										<h5>TRAVEL INFORMATION</h5>
									</div>
									<div className="schedule-list-col">
										<p className="primary sm">
											<StarSm />
											Fly into Tulum International Airport (TQO) or Cancún
											International Airport (CUN)
											<br />
											<StarSm /> Retreat transportation will pick you up and
											take you to the villa.
										</p>
									</div>
								</div>
								<div className="schedule-list-row">
									<img
										src="/home/star1.png"
										alt=""
										style={{
											display: "inline",
											width: 50,
											height: 60,
											marginRight: "auto",
										}}
									/>
								</div>
							</div>
						</div>
					</section>

					<section className="conclusion-section">
						<h3 className="center-text headline center">
							"When women gather in circle, magic happens—not the trick kind,
							but the healing kind." <br />
							<span className="quote-tulum"> - Toko-pa Turner</span>
						</h3>
						<div className="button-wrapper">
							<button
								className="primary-button"
								onClick={() =>
									window.open(
										"https://buy.stripe.com/7sY5kCeFO7zUfJK5Bs2wU0X",
										"_blank",
										"noopener,noreferrer",
									)
								}
							>
								Place your deposit
							</button>

							<p className="secondary sm text-center">
								Payment plans available from Klarna, Affirm and Afterpay.
							</p>
						</div>
					</section>

					<section className="tulum-testimonials">
						<div className="tulum-testimonials-content">
							<div className="video-frame">
								<iframe
									src="https://www.youtube.com/embed/oEGtR05qtXQ"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
							</div>
							<div className="video-frame">
								<iframe
									src="https://www.youtube.com/embed/CwynTq_OCk0"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
							</div>
							<div className="video-frame">
								<iframe
									src="https://www.youtube.com/embed/K1ot45cWUGQ"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</section>

					<div className="page destinations-spotify">
						<Spotify />
					</div>
					<ContactForm />
				</div>

				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(Tulum);
