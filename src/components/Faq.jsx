import React, { useState } from "react";
import { faqData } from "../utils/utils";

const AccordionItem = ({ question, answer, isOpen, toggle }) => (
  <div className="border-b">
    <button
      className="w-full text-left py-3 px-4 bg-gray-100 text-gray-800 font-semibold focus:outline-none"
      onClick={toggle}
    >
      {question}
    </button>
    {isOpen && (
      <div className="p-4 bg-gray-50 text-gray-600">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

const Accordion = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {faqData.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          toggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="my-32 py-20 sm:my-8 sm:py-4 sm:mx-2 mx-2">
      <h1 className="text-3xl font-semibold font-sans text-center my-6">
        Frequently Asked Questions
      </h1>
      <Accordion faqData={faqData} />
    </div>
  );
};

export default Faq;
