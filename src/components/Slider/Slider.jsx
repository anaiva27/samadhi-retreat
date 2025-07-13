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
					src="/slider/sliderImg1.jpg"
					alt=""
				/>
			</SwiperSlide>
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
					src="/slider/sliderImg5.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/sliderImg6.jpg"
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
					src="/slider/img456.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/img554.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/img1234.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/img5677.jpg"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide className="styled">
				<img
					src="/slider/img999.jpg"
					alt=""
				/>
			</SwiperSlide>
		</Swiper>
	);
}
