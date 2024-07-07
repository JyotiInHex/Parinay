import {useRef, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ScrollContainer = () => {
  const scrollRef = useRef(null);
  const location = useLocation();
  useEffect(() =>{
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    scroll.scrollTo(0, { duration: 0 });
    return () =>{if (scroll) scroll.destroy();};
  }, [location.pathname])

  useGSAP(() =>{

  });
  
  return (
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
  );
};

const App = ()=>{
  return (
    <Router>
      <ScrollToTop />
      <ScrollContainer />
    </Router>
  )
}

export default App;