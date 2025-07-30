import React from "react";
import "./ContactForm.css";
import { Link } from "react-router";

const ContactForm = () => {
	return (
		<div className="contact-form">
			<div className="contact-form-row">
				<div className="contact-form-row-copy-item">
					<p className="primary sm">Let’s evolve together</p>
				</div>
				<div className="contact-form-row-copy-item">
					<p className="primary sm">(Samadhi Sistarhood)</p>
				</div>
				<div className="contact-form-row-copy-item">
					<p className="primary sm">&copy; 2025</p>
				</div>
			</div>

			<div className="contact-form-row">
				<div className="contact-form-col">
					<div className="contact-form-header">
						<h3>Start a Conversation</h3>
						<div className="socials-container">
							<Link>
								<img
									className="social-icon"
									src="/home/fb.png"
									alt="social icon"
								/>
							</Link>

							<Link>
								<img
									className="social-icon"
									src="/home/inst.png"
									alt="social icon"
								/>
							</Link>

							<Link>
								<img
									className="social-icon"
									src="/home/wp.png"
									alt="social icon"
								/>
							</Link>

							<Link>
								<img
									className="social-icon"
									src="/home/yt.png"
									alt="social icon"
								/>
							</Link>
						</div>
						<p>
							We’d love to hear what you’re working on and explore how we can
							help you achieve that.
						</p>
					</div>

					<div className="contact-form-availability">
						<p className="primary sm">Still have questions in mind?</p>
						<p className="primary sm">Let's connect</p>
					</div>
				</div>

				<div className="contact-form-col">
					<div className="form-item">
						<input
							type="text"
							placeholder="Name"
						/>
					</div>

					<div className="form-item">
						<input
							type="text"
							placeholder="Email"
						/>
					</div>

					<div className="form-item">
						<textarea
							type="text"
							rows={6}
							placeholder="Message"
						/>
					</div>

					<div className="form-item">
						<button className="btn">Send Message</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
