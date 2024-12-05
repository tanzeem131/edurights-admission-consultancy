import React from "react";
import { TERipple } from "tw-elements-react";
import { serviceArr } from "../utils/utils";

const ServiceCard = ({ title, details, img }) => {
  return (
    <div
      className="block rounded-lg my-5 bg-black shadow-3d-card transition-shadow duration-300 hover:shadow-3d-card-hover"
      style={{
        boxShadow:
          "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
      }}
    >
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-t-lg">
          <img className="rounded-t-lg" src={img} alt="" />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </TERipple>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {details}
        </p>
        <TERipple>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-yellow-400"
          >
            Know More
          </button>
        </TERipple>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="mt-20">
      <div className="md:text-6xl lg:text-6xl font-bold text-center mt-10 md:mb-20 sm:mt-15 vs:text-2xl vs:mt-5 sm:text-3xl border-[#D69527] border-4 border-l-0 border-r-0 w-fit mx-auto p-2">
        Services
      </div>
      <div className="flex md:flex-nowrap lg:flex-nowrap sm:flex-wrap vs:flex-wrap md:w-[80%] mx-auto md:gap-16 lg:gap-16 sm:gap-0 vs:gap-0 mt-5 sm:w-[80%] vs:w-[75%]">
        {serviceArr.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            details={service.details}
            img={service.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
