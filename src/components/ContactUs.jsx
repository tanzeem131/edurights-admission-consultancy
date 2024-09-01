const ContactUs = () => {
  return (
    <div className="items-center flex">
      <div className="grid grid-cols-12 h-screen lg:gap-[1%] md:gap-[1%] sm:gap-[0%] vs:gap-[0%] my-20 mx-auto">
        <div className="col-span-6 h-full">
          <div className="flex lg:justify-end md:justify-end sm:justify-center vs:justify-center items-center">
            <iframe
              className="rounded-lg lg:w-[70%] md:w-[70%] sm:w-[70%] vs:w-[90%] lg:h-[100%] md:h-[100%] sm:h-[50%] vs:h-[30%]"
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.533993135804!2d86.43133907602395!3d23.799603286884317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd9b87defc1d%3A0x282c97358c651416!2sEdurights%20Admission%20consultancy!5e0!3m2!1sen!2sin!4v1720272857427!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-span-6 h-full">
          <div className="flex flex-col items-start lg:w-[70%] md:w-[70%] sm:w-[50%] vs:w-[30%] lg:h-[100%] md:h-[100%] sm:h-[50%] vs:h-[30%] justify-start">
            <div className="lg:text-2xl md:text-2xl sm:text-lg vs:text-sm">
              <p className="font-bold p-1">
                2nd floor office no. 208, New Market, Kasturba Nagar, Dhanbad,
                Jharkhand
              </p>
              <p className="p-1">
                <span className="font-bold">Phone :</span> +91 6202400037
              </p>
              <p className="p-1">
                <span className="font-bold">Email :</span>{" "}
                edurightsconsultant@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
