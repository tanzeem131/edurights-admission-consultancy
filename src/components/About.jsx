import React from "react";
import aboutVideo from "../image/aboutus.mp4";

const About = () => {
  return (
    <div className="flex md:h-screen md:my-10 flex-col md:flex-row items-center gap-10 px-5 md:px-10 lg:px-32 vs:gap-2 vs:mt-0">
      <div className="w-full h-[120%] items-center md:w-6/12 flex justify-center vs:my-0">
        <video
          autoPlay
          loop
          muted
          className="w-full md:py-10 md:h-[80%] md:rounded-full lg:rounded-full sm:rounded-full vs:rounded-full py-20 vs:my-0 vs:py-0 vs:w-[100%] vs:h-[400px]"
        >
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full md:w-6/12">
        <h2 className="font-bold md:text-6xl my-5 text-center md:text-left sm:text-3xl vs:text-3xl border-[#D69527] border-4 border-l-0 border-r-0 w-fit p-2">
          About Us
        </h2>
        <p className="text-lg md:text-2xl text-justify md:text-left vs:text-sm ">
          Introducing Edurights Admission Consultancy, your trusted partner in
          educational advancement. With a steadfast presence of 5 years,
          Edurights specializes in facilitating admissions primarily for B.Ed,
          D.El.Ed, and Engineering courses. We understand the pivotal role
          education plays in shaping careers and futures. Our dedicated team of
          experts strives to ensure seamless admission processes, providing
          personalized guidance tailored to each student's aspirations. Whether
          you're embarking on your journey into teaching or pursuing engineering
          excellence, Edurights Admission Consultancy is here to navigate you
          towards a successful academic path.
        </p>
      </div>
    </div>
  );
};

export default About;
