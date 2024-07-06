import {useRef, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import locomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css';

import Header from './components/header/header';
import Footer from "./components/footer/footer";

import Landing from "./pages/landing";
import Prices from "./pages/prices";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Login from "./pages/login";
import AboutUs from "./pages/aboutUs"; //{About}

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