import { BiMap, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { googleapi } from "../utils/utils";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-[80%] max-w-screen-lg">
        <div className="flex justify-center">
          <iframe
            className="w-full h-80 md:w-3/4 md:h-[450px] rounded-lg shadow-3d-map transition-shadow duration-300 hover:shadow-3d-map-hover"
            title="location"
            src={googleapi}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex justify-center items-start md:items-center font-semibold">
          <div className="text-base md:text-lg w-full md:w-3/4 space-y-1 bg-transparent p-0 rounded-lg sm:p-4">
            <div className=" text-black flex gap-2 items-center ml-2 sm:ml-0">
              <div className="text-red-700 text-xl rounded-full bg-transparent sm:text-6xl w-fit p-3 sm:p-2">
                <BiMap />
              </div>
              <div className="text-[16px] sm:text-lg ">
                2nd floor office no. 208, New Market, Kasturba Nagar, Dhanbad,
                Jharkhand
              </div>
            </div>
            <div className="text-black flex gap-2 items-center ml-2 sm:ml-0">
              <div className="text-red-700 text-xl rounded-full bg-transparent sm:text-6xl w-fit p-3 sm:p-2">
                <BiPhone />
              </div>
              <div className="text-[16px] sm:text-lg ">+91 6202400037</div>
            </div>
            <div className="text-black flex gap-2 items-center ml-2 sm:ml-0">
              <div className="text-red-700 text-xl rounded-full bg-transparent sm:text-6xl w-fit p-3 sm:p-2">
                <MdEmail />
              </div>
              <div className="text-[16px] sm:text-lg ">
                edurightsconsultant@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
