import "./sliderTulum.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export function SliderTulum() {
	return (
		<Swiper
			modules={[Autoplay, Navigation, EffectFade]}
			loop={true}
			speed={2000}
			effect={"fade"}
			fadeEffect={{
				mode: "cross-fade",
			}}
			navigation={false}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false,
				waitForTransition: true,
			}}
			//		slidesPerView={"auto"}
			// pagination={{ clickable: true }}
			className="mySwiperTulum"
			onPaginationUpdate={() => {}}
		>
			<SwiperSlide className="tulum-slider">
				<div
					className="tulum-slider-img-bg"
					style={{
						backgroundImage: "url(/tulum/Sunrise-92.JPG)",
						backgroundPosition: "center",
					}}
				/>
			</SwiperSlide>
			<SwiperSlide className="tulum-slider">
				<div
					className="tulum-slider-img-bg"
					style={{
						backgroundImage: "url(/tulum/IMG_9335.JPG)",
					}}
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<div
					className="tulum-slider-img-bg"
					style={{
						backgroundImage: "url(/tulum/hero-t1.JPG)",
						backgroundPosition: "center",
					}}
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<div
					className="tulum-slider-img-bg"
					style={{
						backgroundImage: "url(/tulum/1K3A8082.JPG)",
						backgroundPosition: "center",
					}}
				/>
			</SwiperSlide>
		</Swiper>
	);
}
