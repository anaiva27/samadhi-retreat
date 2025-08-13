import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-row">
				<div className="footer-contact">
					<div className="socials-container">
						<Link
							to="https://www.facebook.com/share/g/19ZgURseQc/?mibextid=wwXIfr"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="social-icon"
								src="/home/fb.png"
								alt="social icon"
							/>
						</Link>

						<Link
							target="_blank"
							rel="noopener noreferrer"
							to="https://www.instagram.com/samadhi.sistarhood/"
						>
							<img
								className="social-icon"
								src="/home/inst.png"
								alt="social icon"
							/>
						</Link>

						<Link
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="social-icon"
								src="/home/wp.png"
								alt="social icon"
							/>
						</Link>

						<Link
							target="_blank"
							rel="noopener noreferrer"
							to="https://www.youtube.com/results?search_query=samadhi+sistarhood"
						>
							<img
								className="social-icon"
								src="/home/yt.png"
								alt="social icon"
							/>
						</Link>
					</div>
					<h3>
						Let’s Connect Today <br />
						info<span>@</span>marinafitness.pro
					</h3>
					<p className="secondary">Feel free to reach out anytime.</p>

					<Link
						to="https://calendly.com/marina-marinafitness/30min"
						className="btn"
						target="_blank"
						rel="noopener noreferrer"
					>
						Get in Touch
					</Link>
				</div>

				<div className="footer-nav">
					<Link
						to="/"
						className="footer-nav-item"
					>
						<span>Home</span>
						<span>&#8594;</span>
					</Link>

					<Link
						to="/schedule"
						className="footer-nav-item"
					>
						<span>Schedule</span>
						<span>&#8594;</span>
					</Link>

					<Link
						to="/testimonials"
						className="footer-nav-item"
					>
						<span>Testimonials</span>
						<span>&#8594;</span>
					</Link>

					<Link
						to="/about"
						className="footer-nav-item"
					>
						<span>About</span>
						<span>&#8594;</span>
					</Link>

					{/* <Link
						to="/destinations"
						className="footer-nav-item"
					>
						<span>destinations</span>
						<span>&#8594;</span>
					</Link> */}

					<Link
						to="/contact"
						className="footer-nav-item"
					>
						<span>Contact</span>
						<span>&#8594;</span>
					</Link>

					<Link
						to="/faq"
						className="footer-nav-item"
					>
						<span>FAQ</span>
						<span>&#8594;</span>
					</Link>
				</div>
			</div>
			<div className="footer-row">
				<div className="footer-header">
					<img
						src="/home/Logo-updated.png"
						alt=""
					/>
				</div>

				<div className="footer-copyright-line">
					<p className="primary sm">&copy; 2025 Samadhi Sistarhood Retreats</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
