import workList from "../../data/workList";
import "./Project.css";
import { Link } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Project = () => {
	const workItems = Array.isArray(workList) ? workList : [];

	return (
		<ReactLenis root>
			<div className="page project">
				<section className="project-header">
					<AnimatedCopy
						delay={1}
						animateOnScroll={false}
						className="primary sm"
					>
						What they felt. What they found. <br />
						Honest feedback from those who’ve experienced the retreat firsthand.
					</AnimatedCopy>
					<AnimatedCopy
						tag="h2"
						delay={1}
					>
						Check out the feedback from our amazing retreat guests.
					</AnimatedCopy>
				</section>
				<div className="home-work-list">
					{workItems.map((work) => (
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
				<Reviews />
			</div>
		</ReactLenis>
	);
};

export default Transition(Project);
