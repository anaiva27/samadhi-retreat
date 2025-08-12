import React from "react";

const Spotify = () => {
	return (
		<section className="spotify">
			<iframe
				data-testid="embed-iframe"
				style={{ borderRadius: "12px" }}
				src="https://open.spotify.com/embed/playlist/39ekLlKdrIWBvowyNgImHr?utm_source=generator&theme=0"
				width="100%"
				height="352"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		</section>
	);
};

export default Spotify;
