import React from 'react';
import { TERipple } from 'tw-elements-react';

const serviceArr = [
  { title: "Card title", details: "Some quick example text to build on the card title and make up the bulk of the card's content.",img:"https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" },
  { title: "Card title", details: "Some quick example text to build on the card title and make up the bulk of the card's content.",img:"https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" },
  { title: "Card title", details: "Some quick example text to build on the card title and make up the bulk of the card's content.",img:"https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" }
];

const ServiceCard = ({title,details,img})=>{
  return(
          <div className="block rounded-lg mb-10 bg-black">
                <TERipple>
                  <div
                    className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      className="rounded-t-lg"
                      src={img}
                      alt="" />
                    <a href="#!">
                      <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </TERipple>
                <div className="p-6">
                  <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {title}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {details}
                  </p>
                  <TERipple>
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                      Button
                    </button>
                  </TERipple>
                </div>
          </div>
  )
  
};

const Service =()=> {
  return (
    <div>
      <div className='md:text-6xl lg:text-6xl font-bold text-center mt-10 md:mb-20 sm:mb-15 vs:text-3xl vs:mb-5 sm:text-3xl border-[#D69527] border-4 border-l-0 border-r-0 w-fit mx-auto p-2'>Services</div>
      <div className='flex md:flex-nowrap lg:flex-nowrap sm:flex-wrap vs:flex-wrap md:w-[80%] mx-auto md:gap-16 vs:gap-4 vs:w-[70%]'>
        {serviceArr.map((service,index)=>(
          <ServiceCard key={index} title={service.title} details={service.details} img={service.img}/>
        ))}
      </div>
    </div>
      
  );
}

export default Service;