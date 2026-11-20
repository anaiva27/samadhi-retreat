import "./retreat.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export function SliderHero() {
	return (
		<Swiper
			modules={[Autoplay, Navigation, EffectFade]}
			loop={true}
			speed={2000}
			// slidesPerView={"auto"}
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
			// pagination={{ clickable: true }}
			className="mySwiperRetreat"
			onPaginationUpdate={() => {}}
		>
			<SwiperSlide className="styled">
				<div
					className="slider-img-bg"
					style={{
						backgroundImage: "url(/slider/hero1.jpg)",
						backgroundPosition: "bottom",
					}}
				/>
				<div className="slider-img-overlay"></div>
			</SwiperSlide>

			<SwiperSlide className="styled">
				<div
					className="slider-img-bg"
					style={{
						backgroundImage: "url(/slider/hero2.jpg)",
					}}
				/>
				<div className="slider-img-overlay"></div>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<div
					className="slider-img-bg"
					style={{
						backgroundImage: "url(/slider/hero3.jpg)",
					}}
				/>
				<div className="slider-img-overlay"></div>
			</SwiperSlide>
			{/* <SwiperSlide className="styled">
				<div
					className="slider-img-bg"
					style={{
						backgroundImage: "url(/slider/hero4.jpg)",
					}}
				/>
				<div className="slider-img-overlay"></div>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<div
					className="slider-img-bg"
					style={{
						backgroundImage: "url(/slider/hero5.jpg)",
						backgroundPosition: "bottom",
					}}
				/>
				<div className="slider-img-overlay"></div>
			</SwiperSlide> */}
		</Swiper>
	);
}
