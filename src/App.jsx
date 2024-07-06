import {useRef, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import locomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css';
import Header from './components/header/header';
import Landing from "./components/pages/landing";
import Prices from "./components/pages/prices";
import Services from "./components/pages/services";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";
import AboutUs from "./components/pages/aboutUs"; //{About}
import Footer from "./components/footer/footer";

const App = () => {
  const scrollRef = useRef(null);
  useEffect(() =>{
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () =>{if (scroll) scroll.destroy();};
  }, [])
  useGSAP(() =>{

  });
  
  return (
    <>
      <Router>
        <div className="bg-slate-200 relative" ref={scrollRef} data-scroll-container>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
          <Footer/>
        </div>
    </Router>
    </>
  );
};

export default App;