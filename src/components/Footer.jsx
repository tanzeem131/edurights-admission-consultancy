const Footer = () => {
  return (
    <div className="bg-black text-white vs:text-sm h-80 p-4">
      <div className="grid grid-cols-12 justify-evenly h-5/6">
        <div className="my-1 py-1 col-span-4">
          <p>
            &copy; 2024 edurights admission consultancy. All rights reserved.
          </p>
          <div class="flex justify-start">
            <iframe
              class="w-1/2 h-[50px] md:w-[30%] md:h-[150px] rounded-lg"
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.533993135804!2d86.43133907602395!3d23.799603286884317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd9b87defc1d%3A0x282c97358c651416!2sEdurights%20Admission%20consultancy!5e0!3m2!1sen!2sin!4v1720272857427!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col my-1 py-1 gap-2">
            <a className="hover:text-[#D69527] px-4 w-fit" href="/">
              About
            </a>
            <a className="hover:text-[#D69527] px-4 w-fit" href="/">
              Career
            </a>
            <a className="hover:text-[#D69527] px-4 w-fit" href="/">
              Contact
            </a>
            <a className="hover:text-[#D69527] px-4 w-fit" href="/">
              Privacy & Policy
            </a>
            <a className="hover:text-[#D69527] px-4 w-4" href="/">
              Support
            </a>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col my-1 py-1 gap-2">
            <a
              className="hover:text-[#D69527] px-4"
              href="https://facebook.com/edurightsadmissionconsultancy"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="hover:text-[#D69527] px-4"
              href="https://twitter.com/edurightsadmissionconsultancy"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              className="hover:text-[#D69527] px-4"
              href="https://instagram.com/edurightsadmissionconsultancy"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-1 border-t border-gray-700 h-1/6">
        <p className="text-sm">Designed & Developed By Tanzeem</p>
      </div>
    </div>
  );
};

export default Footer;
