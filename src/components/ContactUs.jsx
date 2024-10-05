import { BiMap, BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div class="flex items-center justify-center py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-[80%] max-w-screen-lg">
        <div class="flex justify-center">
          <iframe
            class="w-full h-80 md:w-3/4 md:h-[450px] rounded-lg shadow-3d-map transition-shadow duration-300 hover:shadow-3d-map-hover"
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.533993135804!2d86.43133907602395!3d23.799603286884317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd9b87defc1d%3A0x282c97358c651416!2sEdurights%20Admission%20consultancy!5e0!3m2!1sen!2sin!4v1720272857427!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="flex justify-center items-start md:items-center font-semibold">
          <div class="text-base md:text-lg w-full md:w-3/4 space-y-1 bg-transparent p-0 rounded-lg sm:p-4">
            <div class=" text-black flex gap-2 items-center ml-2 sm:ml-0">
              <div class="text-red-700 text-xl rounded-full bg-transparent sm:text-6xl w-fit p-3 sm:p-2">
                <BiMap />
              </div>
              <div class="text-[16px] sm:text-2xl ">
                2nd floor office no. 208, New Market, Kasturba Nagar, Dhanbad,
                Jharkhand
              </div>
            </div>
            <div class="text-black flex gap-2 items-center ml-2 sm:ml-0">
              <div class="text-red-700 text-xl rounded-full bg-transparent sm:text-6xl w-fit p-3 sm:p-2">
                <BiPhone />
              </div>
              <div class="text-[16px] sm:text-2xl ">+91 6202400037</div>
            </div>
            <div class="text-black flex gap-2 items-center ml-2 sm:ml-0">
              <div class="text-red-700 text-xl rounded-full bg-transparent sm:text-6xl w-fit p-3 sm:p-2">
                <MdEmail />
              </div>
              <div class="text-[16px] sm:text-2xl ">
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
