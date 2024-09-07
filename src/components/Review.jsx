import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const data = [
    {
      name: `John Morgan`,
      img: `https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1636,h_2562,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/z6glglaefbk5q6pgl5vt/Kaohsiung%EF%BD%9CDasanyuanPhotography%EF%BD%9CKoreanpassportphotosimagephoto-KlookPhilippines.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: `https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1636,h_2562,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/z6glglaefbk5q6pgl5vt/Kaohsiung%EF%BD%9CDasanyuanPhotography%EF%BD%9CKoreanpassportphotosimagephoto-KlookPhilippines.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: `https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1636,h_2562,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/z6glglaefbk5q6pgl5vt/Kaohsiung%EF%BD%9CDasanyuanPhotography%EF%BD%9CKoreanpassportphotosimagephoto-KlookPhilippines.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Rigo Louie`,
      img: `https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1636,h_2562,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/z6glglaefbk5q6pgl5vt/Kaohsiung%EF%BD%9CDasanyuanPhotography%EF%BD%9CKoreanpassportphotosimagephoto-KlookPhilippines.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Mia Williams`,
      img: `https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1636,h_2562,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/z6glglaefbk5q6pgl5vt/Kaohsiung%EF%BD%9CDasanyuanPhotography%EF%BD%9CKoreanpassportphotosimagephoto-KlookPhilippines.jpg`,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
                  <button className="bg-blue-500 text-white text-lg px-6 py-1 rounded-xl hover:bg-blue-600 transition">
                    Read More
                  </button>
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
