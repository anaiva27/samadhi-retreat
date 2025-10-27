import React from "react";
import "./Blog.css";

import FAQContainer from "../../components/FAQContainer/FAQContainer";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

const FAQ = () => {
	return (
		<ReactLenis root>
			<div className="page faq">
				<div className="faq-container faq-wrapper contained">
					<div className="">
						<AnimatedCopy
							tag="h2"
							animateOnScroll={false}
							delay={1}
						>
							Blog
						</AnimatedCopy>
						<br />
						<p>
							We live in a world that glorifies achievement and constant
							productivity, where maternity leave is often just six weeks, and
							where the fast pace of life leaves little room for self-love or
							meaningful connection. <br />
							<br />
							For many of us, burnout becomes normal, and joy begins to feel
							like a luxury. It was from this place of exhaustion that we
							created the Samadhi SiSTARhood Retreat in Peru—a sanctuary for
							women who are ready to pause, breathe, and remember themselves.{" "}
							<br /> <br />
							Peru is not just another destination on a map. It is a sacred
							land, alive with the wisdom of Pachamama, the presence of the
							Andes standing like guardians, and the heartbeat of the Sacred
							Valley that both holds and renews us. The moment we arrive, we
							feel the land welcoming us home. The mountains whisper resilience,
							the rivers teach us flow, and the silence invites us to listen to
							our own hearts again. <br /> <br />
							In this space, we learn what our societies never taught us: how to
							regulate our nervous systems and soften into presence. Instead of
							waking to emails and rushing into a day of demands, we rise with
							the sun, breathe with the mountains, and move with intention.
							Through yoga, meditation, breathwork, nourishing meals, digital
							detox, and sacred ceremonies, we return to ourselves. <br />{" "}
							<br />
							We realize that we cannot pour from an empty cup—and that
							self-care is not indulgence, but survival. <br /> <br />
							And then there is the gift we did not expect to be so powerful:
							our sisterhood or how we like to say siSTARhood - we are a cosmic
							being in the end 🙂 <br /> <br />
							In circles of trust, we share stories we’ve never spoken aloud. We
							cry together, we laugh until our bellies ache, and we witness one
							another in raw, tender truth. The walls we built to survive begin
							to fall, and in their place grows deep, knowing that we are never
							alone. Women from different ages, backgrounds, cultures, and
							countries become family - cosmic sisters walking the same path of
							healing. <br /> <br />
							When we return home to our families, our careers, and our daily
							lives, we are not the same women who boarded the plane. Peru has
							worked her quiet magic. We carry with us tools to calm our nervous
							systems, the confidence to set boundaries, the courage to
							prioritize joy alongside ambition, and a connection to nature that
							keeps us grounded. <br /> <br />
							Most of all, we carry our SiSTARhood, a community that continues
							to hold and inspire us long after the retreat ends. <br /> <br />
							Unlike a vacation that fades as soon as the suitcase is unpacked,
							the Samadhi SiSTARhood Retreat transforms us at the soul level.
							Peru teaches us to live from presence rather than performance, to
							embrace self-love as a way of life, and to return to our lives not
							with more to do, but with more space to simply be. It is more than
							a retreat—it is a homecoming.
						</p>
					</div>
				</div>
				<ContactForm />
				<Footer />
			</div>
		</ReactLenis>
	);
};

export default Transition(FAQ);
