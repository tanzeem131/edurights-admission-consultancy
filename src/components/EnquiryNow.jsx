import React, { useState } from "react";
import DOMPurify from "dompurify";
import { useForm } from "react-hook-form";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const sanitizedData = {
      full_name: DOMPurify.sanitize(data.full_name),
      email_id: DOMPurify.sanitize(data.email_id),
      address: DOMPurify.sanitize(data.address),
      contact_no: DOMPurify.sanitize(data.contact_no),
      message: DOMPurify.sanitize(data.message),
    };

    await fetch("https://edurights-backend-1.onrender.com/api/enquiry/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitizedData),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.status === 201) {
          alert("Form Data Submitted :)");
          reset();
          setShowModal(false);
        } else {
          return res.json().then((data) => {
            console.error("Error:", data);
            alert("There was an error :(");
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Fetch error:", error);
        alert("There was an error :(");
      });
  };

  return (
    <>
      <button
        className="z-50 md:w-fit md:h-fit vs:w-fit vs:h-fit md:text-lg vs:text-sm md:p-5 vs:p-2 fixed md:right-7 vs:right-3 top-1/2 transform -translate-y-1/2 translate-x-1/2 -rotate-90 bg-[#ffed00] text-black hover:bg-[#FFF9F2] font-bold uppercase  rounded-full shadow hover:shadow-lg outline-none focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Enquiry Now
      </button>

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-2xl font=semibold">
                    Get Free counselling
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black font-semibold flex justify-center items-center opacity-7 h-6 w-6 text-xl bg-gray-400 py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                  >
                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                      <span className="text-red-600 animate-pulse transform transition-transform duration-300 ease-in-out hover:scale-110">
                        *
                      </span>
                    </label>
                    <input
                      {...register("full_name")}
                      id="full_name"
                      required
                      minLength={2}
                      maxLength={20}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Email Id
                      <span className="text-red-600 animate-pulse transform transition-transform duration-300 ease-in-out hover:scale-110">
                        *
                      </span>
                    </label>
                    <input
                      {...register("email_id")}
                      id="email_id"
                      required
                      type="email"
                      minLength={11}
                      maxLength={30}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input
                      {...register("address")}
                      id="address"
                      minLength={5}
                      maxLength={100}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Contact No.
                      <span className="text-red-600 animate-pulse transform transition-transform duration-300 ease-in-out hover:scale-110">
                        *
                      </span>
                      <span className="text-[8px] mx-2 bg-red-600 p-1 rounded-full">
                        No SPAM calls
                      </span>
                    </label>
                    <input
                      {...register("contact_no")}
                      id="contact_no"
                      required
                      type="tel"
                      pattern="^\d{10}$"
                      minLength={10}
                      maxLength={15}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Message
                    </label>
                    <input
                      {...register("message")}
                      id="message"
                      maxLength={50}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    />
                    <button
                      className="text-white my-2 bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default React.memo(Modal);
