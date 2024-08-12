const Footer = () => {
  return (
    <div className="bg-black text-white h-56 p-4">
      <div className="grid grid-cols-12 justify-evenly">
        <div className="my-1 py-1 col-span-4">
          <p>
            &copy; 2024 edurights admission consultancy. All rights reserved.
          </p>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col my-1 py-1 gap-2">
            <a className="hover:font-semibold px-4 w-4" href="#">
              About
            </a>
            <a className="hover:font-semibold px-4 w-4" href="#">
              Contact
            </a>
            <a className="hover:font-semibold px-4 w-4" href="#">
              Policy
            </a>
            <a className="hover:font-semibold px-4 w-4" href="#">
              Support
            </a>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col my-1 py-1 gap-2">
            <a
              className="hover:font-semibold px-4"
              href="https://facebook.com/edurightsadmissionconsultancy"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="hover:font-semibold px-4"
              href="https://twitter.com/edurightsadmissionconsultancy"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              className="hover:font-semibold px-4"
              href="https://instagram.com/edurightsadmissionconsultancy"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
