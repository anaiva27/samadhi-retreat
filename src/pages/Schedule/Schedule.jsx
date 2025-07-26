import React from "react";
import "./Schedule.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import StarSm from "../../components/Star/StarSm";

const Schedule = () => {
	return (
		<ReactLenis root>
			<div className="page schedule">
				<section className="about-header header-space">
					<h2>
						"Travel light, live light, spread the light, be the light."
						<br />
						<span
							style={{
								fontFamily: "Zapfino",
								textTransform: "none",
								fontSize: "1rem",
								marginLeft: "-4px",
								fontWeight: 600,
							}}
						>
							- Yogi Bhajan
						</span>
					</h2>
				</section>
				<p className="center-text headline">
					{" "}
					Here’s a glimpse into each day of your journey — <br />
					carefully designed to nourish your body, mind, and soul.
				</p>
				{/* <section className="services">
					<div className="services-col">
						<img
							src="/about/women1.jpg"
							alt=""
						/>
					</div>
				</section> */}

				<section className="schedule-section">
					<h3 className="center-text headline center">
						Tentative schedule <br />
						<span
							style={{
								fontFamily: "Zapfino",
								textTransform: "none",
								fontSize: "1rem",
								marginLeft: "-4px",
								fontWeight: 600,
							}}
						>
							{" "}
							September 19th - 25th, 2026
						</span>
					</h3>
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
									<StarSm /> Shuttle pick up from the airport or Cusco
									<br />
									<StarSm /> Arrival to Samadhi center
									<br />
									<StarSm /> 1 pm Lunch
									<br />
									<StarSm /> Gentle yoga, opening circle + setting intention
									Dinner
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
									<StarSm /> Morning meditation and Mobility flow class w/Marina
									<br />
									<StarSm /> Breakfast
									<br />
									<StarSm /> Free time for massage
									<br />
									<StarSm />
									Lunch
									<br />
									<StarSm /> Mandala creation workshop w/everyone
									<br />
									<StarSm /> Restorative/Yin yoga w/Amber
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
								<h5>Day 3.</h5>
							</div>
							<div className="schedule-list-col">
								<p className="primary sm">
									{" "}
									<StarSm /> Sunrise energizing yoga flow w/Marina
									<br />
									<StarSm /> Breakfast
									<br />
									<StarSm /> Excursion to Moray and Maras Lunch
									<br />
									<StarSm /> Breathwork session w/Susanna
									<br />
									<StarSm /> Dinner
									<br />
									<StarSm /> Journaling circle by the bonfire w/Susanna
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
									<StarSm /> Meditation w/Amber
									<br />
									<StarSm /> Mobility flow class w/Amber
									<br />
									<StarSm /> Breakfast
									<br />
									<StarSm /> Hiking around Samahdi center w/Fernando
									<br />
									<StarSm /> Free time
									<br />
									<StarSm /> Lunch
									<br />
									<StarSm /> Cacao ceremony and ecstatic dance w/Amber and
									Marina
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
									<StarSm /> Meditation w/Susanna
									<br />
									<StarSm /> Mobility flow class w/Marina
									<br />
									<StarSm /> Breakfast
									<br />
									<StarSm /> Tour to Pisac town and Sound bath experience w/Luca
									<br />
									<StarSm /> Dinner
									<br />
									<StarSm /> Journaling by the fire w/Susanna
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
									<StarSm /> Moving Mediation w/Marina
									<br />
									<StarSm /> Light Breakfast
									<br />
									<StarSm /> Temazcal ceremony
									<br />
									<StarSm /> Lunch
									<br />
									<StarSm /> Free time
									<br />
									<StarSm /> Vinyasa yoga w/Amber
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
								<h5>Day 7.</h5>
							</div>
							<div className="schedule-list-col">
								<p className="primary sm">
									{" "}
									<StarSm /> Sunrise energizing yoga
									<br />
									<StarSm /> Closing circle
									<br />
									<StarSm /> Breakfast
									<br />
									<StarSm /> Transportation to Cuzco or continue travel with us
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
				<br />
				<br />
				<h3 className="center-text headline center">
					Stay for another 4 days to see more of Sacred Valley including iconic
					Machu Picchu <br />
					<span
						style={{
							fontFamily: "Zapfino",
							textTransform: "none",
							fontSize: "1rem",
							marginLeft: "-4px",
							fontWeight: 600,
						}}
					>
						- $1200 USD
					</span>
				</h3>

				<section className="schedule-section">
					<div className="services-col">
						<img
							src="/schedule/women2.jpeg"
							alt=""
						/>
					</div>
					<div className="services-col">
						<AnimatedCopy
							animateOnScroll={true}
							tag="h4"
							className=""
						>
							What's Included:
						</AnimatedCopy>
						<AnimatedCopy
							animateOnScroll={true}
							tag="p"
							className="primary"
						>
							<StarSm /> Transfer to Ollantaytambo town
							<br />
							<StarSm /> Entrance fee to Ollantaytambo sacred site
							<br />
							<StarSm /> Train and bus tickets from Ollantaytambo to Machu
							Picchu village and from Machu Picchu to Cuzco
							<br />
							<StarSm /> Entrance fee and guide to Machu Picchu
							<br />
							<StarSm /> Walking tour in Cusco
							<br />
							<StarSm /> Guided excursion and entrance fee to Saqsaywaman
							<br />
							<StarSm /> 4 nights accommodation shared hotel rooms (2 people)
							<br />
							<StarSm /> Breakfast included
							<br />
							<StarSm /> Taxi fees (e.x. From train station to hotel or from
							hotel to Saqsaywaman)
						</AnimatedCopy>
						<br />
						<AnimatedCopy
							animateOnScroll={true}
							tag="h4"
							className=""
						>
							What's Not Included:
						</AnimatedCopy>
						<AnimatedCopy
							animateOnScroll={true}
							tag="p"
							className="primary"
						>
							<StarSm /> Lunch and dinner
							<br />
							<StarSm /> Tips to the guide
							<br />
							<StarSm /> Taxi on your final day from hotel in Cusco to airport
						</AnimatedCopy>
					</div>
				</section>

				<section className="schedule-section">
					<h3 className="center-text headline center">
						Tentative schedule for 4 days add-on
					</h3>
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
								<h5>September 25.</h5>
							</div>
							<div className="schedule-list-col">
								<p className="primary sm">
									<StarSm /> 12pm transfer to Ollantaytambo, hotel check-in
									<br />
									<StarSm /> 2pm visiting of Ollantaytambo sacred site
									<br />
									<StarSm /> free time, markets visiting, dinner
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
								<h5>September 26.</h5>
							</div>
							<div className="schedule-list-col">
								<p className="primary sm">
									<StarSm /> Breakfast
									<br />
									<StarSm /> Early train to Machu Picchu, hotel bags drop off
									<br />
									<StarSm /> 11 am Machu Picchu visit
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
								<h5>September 27.</h5>
							</div>
							<div className="schedule-list-col">
								<p className="primary sm">
									{" "}
									<StarSm /> Breakfast
									<br />
									<StarSm /> Train to Cuzco, hotel check in,
									<br />
									<StarSm /> Walking excursion to Cusco
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
								<h5>September 28</h5>
							</div>
							<div className="schedule-list-col">
								<p className="primary sm">
									{" "}
									<StarSm /> Breakfast
									<br />
									<StarSm /> guided tour to Saqsaywaman
									<br />
									<StarSm /> Free time
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
								<h5>September 29.</h5>
							</div>
							<div className="schedule-list-col">
								<p className="primary sm">
									{" "}
									<StarSm /> Breakfast, Check-out
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

				<ContactForm />

				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(Schedule);
