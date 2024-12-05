import React from "react";
import EDURIGHTS from "../image/EDURIGHTS.png";

const About = () => {
  return (
    <div className="flex h-max flex-col md:flex-row items-center gap-10 px-5 md:px-10 lg:px-32 vs:gap-2 my-10">
      <div className="w-full md:w-6/12 flex justify-center items-center vs:my-0 lg:p-20 md:p-10 sm:p-10 vs:p-1">
        <div className="lg:w-96 lg:h-96 md:w-96 md:h-96 sm:w-96 sm:h-96 vs:w-64 vs:h-64 flex justify-center items-center">
          <div className="w-full h-full rounded-full relative">
            <div
              className="absolute inset-0 rounded-full border-8 border-gray-300"
              style={{
                boxShadow:
                  "0 4px 10px rgba(0, 0, 0, 0.25), inset 0 4px 8px rgba(255, 255, 255, 0.2)",
                background: "linear-gradient(135deg, #d4d4d4, #f5f5f5)",
              }}
            ></div>
            <img
              src={EDURIGHTS}
              className="w-full h-full rounded-full object-cover relative"
              alt="edurights-about"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12">
        <h2 className="font-bold md:text-6xl my-5 mx-auto sm:text-3xl vs:text-2xl border-[#D69527] border-4 border-l-0 border-r-0 w-fit p-2">
          About Us
        </h2>
        <p className="rounded-lg text-lg md:text-xl sm:text-sm text-justify md:text-left vs:text-sm px-6 sm:px-2 py-2 vs:py-0">
          Introducing Edurights Admission Consultancy, your trusted partner in
          educational advancement. With a steadfast presence of 5 years,
          Edurights specializes in facilitating admissions primarily for
          Management, Nursing, Medical, Engineering, B.Ed, Diploma courses. We
          understand the pivotal role education plays in shaping careers and
          futures. Our dedicated team of experts strives to ensure seamless
          admission processes, providing personalized guidance tailored to each
          student's aspirations. Whether you're embarking on your journey into
          teaching or pursuing engineering excellence, Edurights Admission
          Consultancy is here to navigate you towards a successful academic
          path.
        </p>
      </div>
    </div>
  );
};

export default About;
