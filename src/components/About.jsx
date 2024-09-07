import React from "react";
import EDURIGHTS from "../image/EDURIGHTS.png";

const About = () => {
  return (
    <div className="flex h-max flex-col md:flex-row items-center gap-10 px-5 md:px-10 lg:px-32 vs:gap-2 my-10">
      <div className="w-full lg:h-[100%] md:h-[100%] sm:h-[50%] vs:h-[40%] md:w-6/12 flex justify-center items-center vs:my-0 lg:p-20 md:p-20 sm:p-2 vs:p-1">
        <img
          src={EDURIGHTS}
          className="lg:w-full md:w-[100%] sm:w-[80%] vs:w-[80%] md:h-[80%] lg:h-[80%] sm:h-[200px] vs:h-[200px] md:rounded-xl lg:rounded-xl sm:rounded-xl vs:rounded-xl vs:my-0 vs:py-0 "
          alt="edurights-about"
        />
      </div>
      <div className="w-full md:w-6/12">
        <h2 className="font-bold md:text-6xl my-5 mx-auto sm:text-3xl vs:text-3xl border-[#D69527] border-4 border-l-0 border-r-0 w-fit p-2">
          About Us
        </h2>
        <p className="rounded-lg text-lg md:text-2xl text-justify md:text-left vs:text-sm px-6 sm:px-2 py-2 sm:py-2 bg-[#D69527]">
          Introducing Edurights Admission Consultancy, your trusted partner in
          educational advancement. With a steadfast presence of 5 years,
          Edurights specializes in facilitating admissions primarily for
          Management, Nursing, Engineering, B.Ed, D.El.Ed courses. We understand
          the pivotal role education plays in shaping careers and futures. Our
          dedicated team of experts strives to ensure seamless admission
          processes, providing personalized guidance tailored to each student's
          aspirations. Whether you're embarking on your journey into teaching or
          pursuing engineering excellence, Edurights Admission Consultancy is
          here to navigate you towards a successful academic path.
        </p>
      </div>
    </div>
  );
};

export default About;
