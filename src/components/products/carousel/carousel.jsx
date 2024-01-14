// ResponsiveCarousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import "./carousel.css";

export const Carousel = () => {
  return (
    <div className="lg:w-8/12 w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1240: {
            slidesPerView: 3,
          },
        }}
        navigation
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="carousel-slide">
          <div className="slide-content">
            <img src="https://placekitten.com/400/301" alt="Slide 1" />
            <h3>Slide 2</h3>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="carousel-slide">
          <div className="slide-content">
            <img src="https://placekitten.com/400/302" alt="Slide 2" />
            <h3>Slide 3</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="carousel-slide">
          <div className="slide-content">
            <img src="https://placekitten.com/400/302" alt="Slide 3" />
            <h3>Slide 3</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
