import React from "react";
import { courses } from "../utils/utils";

const CourseButton = ({ name, Icon }) => (
  <button className="btn md:h-[150px] lg:h-[150px] sm:h-[50px] vs:h-[50px] md:w-[350px] lg:w-[350px] sm:w-[200px] vs:w-[160px] text-3xl relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
    <span className="w-0 h-0 rounded bg-[#D69527] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
    <span className="w-full text-black transition-colors vs:p-2 lg:text-3xl md:text-3xl sm:text-[17px] vs:text-[16px] duration-300 ease-in-out group-hover:text-white z-10">
      {name}
      <span className="flex justify-center vs:pb-2">
        <Icon />
      </span>
    </span>
  </button>
);

const Course = () => {
  return (
    <div className="md:p-5 md:m-5 lg:p-5 lg:m-5 sm:p-2 sm:my-10 vs:p-2 vs:px-0 vs:my-12">
      <div className="flex flex-col my-10 md:ml-[9%] sm:ml-[5%] vs:ml-[5%]">
        <div className="text-3xl font-bold">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block">
            <span className="relative text-white">Courses</span>
          </span>
        </div>
        <div className="md:text-6xl lg:text-6xl sm:text-3xl vs:text-2xl font-bold border-[#D69527] border-4 border-t-0 w-fit p-2">
          Explore Our Variety of Course Offerings
        </div>
      </div>
      <div className="flex flex-wrap md:gap-8 lg:gap-8 sm:gap-4 vs:gap-2 vs:px-[2px] justify-center items-center">
        {courses.map((course, index) => (
          <CourseButton key={index} name={course.name} Icon={course.icon} />
        ))}
      </div>
    </div>
  );
};

export default Course;
