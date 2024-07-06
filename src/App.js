import './App.css';
import Header from './components/Header.jsx';
import Slider from './components/Slider.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Course from './components/Course.jsx';
import Review from './components/Review.jsx';
import Modal from './components/EnquiryNow.jsx';
import ContactUs from './components/ContactUs.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <About/>
      <Service/>
      <Course/>
      <Review/>
      <ContactUs/>
      <Modal/>
    </div>
  );
}

export default App;
