import "./App.css";
import React, { Suspense, useState } from "react";
import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import { useInView } from "react-intersection-observer";

const Review = React.lazy(() => import("./components/Review.jsx"));
const About = React.lazy(() => import("./components/About.jsx"));
const Service = React.lazy(() => import("./components/Service.jsx"));
const Course = React.lazy(() => import("./components/Course.jsx"));
const ImageSlider = React.lazy(() => import("./components/Gallery.jsx"));
const Faq = React.lazy(() => import("./components/Faq.jsx"));
const ContactUs = React.lazy(() => import("./components/ContactUs.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));
const Modal = React.lazy(() => import("./components/EnquiryNow.jsx"));

function App() {
  const [visibleSections, setVisibleSections] = useState({
    review: false,
    about: false,
    service: false,
    course: false,
    imageSlider: false,
    faq: false,
    contactUs: false,
    footer: false,
    modal: false,
  });

  const handleVisibilityChange = (section, inView) => {
    if (inView) {
      setVisibleSections((prevState) => ({ ...prevState, [section]: true }));
    }
  };

  const { ref: reviewRef, inView: reviewInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: serviceRef, inView: serviceInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: courseRef, inView: courseInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: imageSliderRef, inView: imageSliderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: contactUsRef, inView: contactUsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: modalRef, inView: modalInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    handleVisibilityChange("review", reviewInView);
    handleVisibilityChange("about", aboutInView);
    handleVisibilityChange("service", serviceInView);
    handleVisibilityChange("course", courseInView);
    handleVisibilityChange("imageSlider", imageSliderInView);
    handleVisibilityChange("faq", faqInView);
    handleVisibilityChange("contactUs", contactUsInView);
    handleVisibilityChange("footer", footerInView);
    handleVisibilityChange("modal", modalInView);
  }, [
    reviewInView,
    aboutInView,
    serviceInView,
    courseInView,
    imageSliderInView,
    faqInView,
    contactUsInView,
    footerInView,
    modalInView,
  ]);

  return (
    <div>
      <div id="home">
        <Header />
        <Slider />
      </div>
      <div id="about">
        <div ref={aboutRef}>
          <Suspense fallback={<div>Loading About...</div>}>
            {visibleSections.about && <About />}
          </Suspense>
        </div>
      </div>
      <div id="service">
        <div ref={serviceRef}>
          <Suspense fallback={<div>Loading Service...</div>}>
            {visibleSections.service && <Service />}
          </Suspense>
        </div>
      </div>
      <div id="course">
        <div ref={courseRef}>
          <Suspense fallback={<div>Loading Course...</div>}>
            {visibleSections.course && <Course />}
          </Suspense>
        </div>
      </div>
      <div ref={imageSliderRef}>
        <Suspense fallback={<div>Loading ImageSlider...</div>}>
          {visibleSections.imageSlider && <ImageSlider />}
        </Suspense>
      </div>
      <div ref={reviewRef}>
        <Suspense fallback={<div>Loading Review...</div>}>
          {visibleSections.review && <Review />}
        </Suspense>
      </div>
      <div ref={faqRef}>
        <Suspense fallback={<div>Loading FAQ...</div>}>
          {visibleSections.faq && <Faq />}
        </Suspense>
      </div>
      <div id="contact">
        <div ref={contactUsRef}>
          <Suspense fallback={<div>Loading Contact Us...</div>}>
            {visibleSections.contactUs && <ContactUs />}
          </Suspense>
        </div>
      </div>
      <div ref={footerRef}>
        <Suspense fallback={<div>Loading Footer...</div>}>
          {visibleSections.footer && <Footer />}
        </Suspense>
      </div>
      <div ref={modalRef}>
        <Suspense fallback={<div>Loading Modal...</div>}>
          {visibleSections.modal && <Modal />}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
