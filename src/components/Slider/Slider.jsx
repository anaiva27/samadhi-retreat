import "./retreat.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export function Slider() {
	return (
		<Swiper
			modules={[Autoplay, Navigation]}
			slidesPerView={"auto"}
			loop={true}
			navigation={true}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false,
			}}
			// pagination={{ clickable: true }}
			className="mySwiperRetreat"
			onPaginationUpdate={() => {}}
		>
			<SwiperSlide className="styled">
				<img
					src="/slider/sliderImg4.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/sliderImg3.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/sliderImg2.jpg"
					alt=""
				/>
			</SwiperSlide>

			<SwiperSlide className="styled">
				<img
					src="/slider/img122.jpg"
					alt=""
				/>
			</SwiperSlide>

			<SwiperSlide className="styled">
				<img
					src="/slider/IMG_0488a.png"
					alt=""
				/>
			</SwiperSlide>

			<SwiperSlide className="styled">
				<img
					src="/slider/B8A8046a.jpg"
					alt=""
				/>
			</SwiperSlide>

			<SwiperSlide className="styled">
				<img
					src="/slider/img8b.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/img12b.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/img53b.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/B8A7461b.jpg"
					alt=""
				/>
			</SwiperSlide>

			<SwiperSlide className="styled">
				<img
					src="/slider/img12c.png"
					alt=""
				/>
			</SwiperSlide>

			<SwiperSlide className="styled">
				<img
					src="/slider/img77c.png"
					alt=""
				/>
			</SwiperSlide>
		</Swiper>
	);
}
