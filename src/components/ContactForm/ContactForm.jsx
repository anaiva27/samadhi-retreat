import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
	const [formName, setFormName] = useState("");
	const [formEmail, setFormEmail] = useState("");
	const [formMessage, setFormMessage] = useState("");

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

				{/* <div id="mc_embed_shell"> */}
				<div className="contact-form-col">
					{/* <div id="mc_embed_signup"> */}
					<form
						action="https://marinafitness.us18.list-manage.com/subscribe/post?u=81d7f5090e271a5e5249e16c7&amp;id=a72c961373&amp;f_id=00a2afe6f0"
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						className="validate"
						target="_blank"
					>
						<div className="contact-form-fields">
							<div className="form-item">
								<input
									type="email"
									name="EMAIL"
									className="required email"
									id="mce-EMAIL"
									placeholder="Email"
									required=""
									value={formEmail}
									onChange={(v) => setFormEmail(v.target.value)}
								/>
							</div>
							<div className="form-item">
								<input
									type="text"
									name="FNAME"
									className=" text"
									id="mce-FNAME"
									placeholder="Name"
									value={formName}
									onChange={(v) => setFormName(v.target.value)}
								/>
							</div>
							<div className="form-item">
								<input
									type="text"
									name="MMERGE5"
									className="text"
									id="mce-MMERGE5"
									placeholder="Message"
									value={formMessage}
									onChange={(v) => setFormMessage(v.target.value)}
								/>
							</div>
							<div
								id="mce-responses"
								className="clear"
							>
								<div
									className="response"
									id="mce-error-response"
									style={{ display: "none" }}
								></div>
								<div
									className="response"
									id="mce-success-response"
									style={{ display: "none" }}
								></div>
							</div>
							<div
								aria-hidden="true"
								style={{ position: "absolute", left: "-5000px" }}
							>
								<input
									type="text"
									name="b_81d7f5090e271a5e5249e16c7_a72c961373"
									tabIndex="-1"
									value=""
								/>
							</div>
							<div className="form-item">
								<input
									type="submit"
									name="subscribe"
									id="mc-embedded-subscribe"
									className="btn"
									value="Send Message"
									disabled={!formEmail || !formName || !formMessage}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
