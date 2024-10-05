import React from "react";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import img1 from "../image/confused.png";
import img2 from "../image/career.png";
import img3 from "../image/Aim.png";

const Slider = () => {
  const images = [img1, img2, img3];
  return (
    <section className="max-w-[80%] h-auto mx-auto my-[100px] vs:p-0 vs:mb-0 sm:max-w-[95%] vs:max-w-[100%]">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <a href="/#">
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className="max-w-[85%] md:h-[820px] mx-auto py-2 vs:py-0 vs:max-w-[100%] vs:mt-2 vs:h-[40vh] sm:max-w-[95%] sm:py-0 "
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-xl font-bold text-center animate-bounce vs:text-[10px] sm:text-[15px]">
        &lt;&lt;&lt; Swipe horizontally &gt;&gt;&gt;
      </div>
    </section>
  );
};

export default Slider;
