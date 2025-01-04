import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { googleapi } from "../utils/utils";

const Footer = () => {
  return (
    <div className="bg-[#FFEFD5] text-black vs:text-sm h-80 p-4">
      <div className="grid grid-cols-12 justify-evenly h-5/6">
        <div className="my-1 py-1 col-span-5 font-sans">
          <p>
            &copy; {new Date().getFullYear()} edurights admission consultancy.
            All rights reserved.
          </p>
          <div className="flex justify-start sm:p-0 p-4">
            <iframe
              className="w-[70px] h-[70px] md:w-[30%] md:h-[150px] rounded-lg"
              title="location"
              src={googleapi}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex flex-col my-1 py-1 gap-2">
            <a className="hover:text-[#D69527] font-sans px-4 w-fit" href="/">
              About
            </a>
            <a className="hover:text-[#D69527] font-sans px-4 w-fit" href="/">
              Career
            </a>
            <a className="hover:text-[#D69527] font-sans px-4 w-fit" href="/">
              Contact
            </a>
            <a className="hover:text-[#D69527] font-sans px-4 w-fit" href="/">
              Privacy & Policy
            </a>
            <a className="hover:text-[#D69527] font-sans px-4 w-4" href="/">
              Support
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col my-1 py-1 gap-2 text-3xl">
            <div className="hover:text-[#D69527]">
              <FaFacebook />
            </div>
            <div className="hover:text-[#D69527]">
              {" "}
              <FaInstagram />
            </div>
            <div className="hover:text-[#D69527]">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-1 border-t border-gray-700 h-1/6">
        <p className="text-sm font-sans">Designed & Developed by Tanzeem</p>
      </div>
    </div>
  );
};

export default Footer;
