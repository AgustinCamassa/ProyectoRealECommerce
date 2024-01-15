import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import car1 from "../../../assets/img/car1.png";
import car2 from "../../../assets/img/car2.png";
import car3 from "../../../assets/img/car3.png";
import car4 from "../../../assets/img/car4.png";
import { TextContext } from "../textContent/textContent";
import data from "../../../data/carousel.json";
import "./carousel.css";

export const Carousel = () => {
  const { updateText } = useContext(TextContext);
  // const [activeIndex, setActiveIndex] = useState(0);

  const handleUpdateText = (productID) => {
    const text = data.find((product) => product.id == productID);
    updateText(text);
  };

  return (
    <div className="lg:w-8/12 w-full">
      <Swiper
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
        // onSlideChange={() =>  handleUpdateText(swiper.activeIndex)}
        onRealIndexChange={(element) => {
          // setActiveIndex(element.activeIndex);
          handleUpdateText(element.activeIndex + 1);
          // console.log(activeIndex);
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="carousel-slide" id="swiperSlide-1">
          <div
            className="slide-content"
            onClick={() => handleUpdateText(1)}
            onMouseEnter={() => handleUpdateText(1)}
          >
            <img src={car1} alt="1" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="carousel-slide" id="swiperSlide-2">
          <div
            className="slide-content"
            onClick={() => handleUpdateText(2)}
            onMouseEnter={() => handleUpdateText(2)}
          >
            <img src={car2} alt="2" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="carousel-slide" id="swiperSlide-3">
          <div
            className="slide-content"
            onClick={() => handleUpdateText(3)}
            onMouseEnter={() => handleUpdateText(3)}
          >
            <img src={car3} alt="3" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="carousel-slide" id="swiperSlide-4">
          <div
            className="slide-content"
            onClick={() => handleUpdateText(4)}
            onMouseEnter={() => handleUpdateText(4)}
          >
            <img src={car4} alt="4" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
