import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "../utils/utils";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnDotsHover: true,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="lg:my-20 md:my-16 sm:my-10 vs:my-20 max-w-full overflow-hidden">
      <div className="text-center font-bold lg:text-6xl md:text-5xl sm:text-3xl vs:text-2xl">
        <p className="border-[#D69527] border-4 border-l-0 border-r-0 w-fit p-2 mx-auto">
          Our Trusted Alumni ❤️
        </p>
      </div>
      <div className="w-10/12 lg:w-3/4 m-auto">
        <div className="lg:mt-16 md:mt-14 sm:mt-10 vs:mt-8">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-fit text-black rounded-xl shadow-lg"
              >
                <div className="h-64 bg-[#FFF9F2] flex justify-center items-center rounded-t-xl py-5 px-2">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-44 w-44 object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="lg:text-xl md:text-lg sm:text-md font-semibold vs:text-sm">
                    {d.name}
                  </p>
                  <p className="text-justify lg:text-sm md:text-sm vs:text-xs">
                    {d.review}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
