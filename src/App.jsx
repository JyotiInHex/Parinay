import { useRef, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Landing from "./pages/landing";
import Pricing from "./pages/pricing";
import Features from "./pages/features";
import Contact from "./pages/contact";
import Login from "./auth/login";
import Register from "./auth/register";
import ForgotPass from "./auth/forgotPass";
import AboutUs from "./pages/aboutUs";
import Faq from "./pages/faq";
import NotFound from "./errors/notFound";

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
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [transitionState, setTransitionState] = useState('pageTransition-active');
  
  const handleLoginClick = () => {
    setShowLogin(true);
    setShowForgot(false);
  };
  const handleForgotClick = () => {
    setShowLogin(false);
    setShowForgot(true);
  };
  const handleCloseClick = () => {
    setShowLogin(false);
    setShowForgot(false);
  };

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    scroll.scrollTo(0, { duration: 0 });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [location.pathname]);

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/pricing":
        document.title = "Parinay - Pricing Plans";
        break;
      case "/features":
        document.title = "Parinay - Our Features";
        break;
      case "/contact":
        document.title = "Parinay - Contact Us";
        break;
      case "/faq":
        document.title = "Parinay - FAQ";
        break;
      case "/aboutUs":
        document.title = "Parinay - About Us";
        break;
      case "/register":
        document.title = "Parinay - Register";
        break;
      default:
        document.title = "Parinay - Assamese Matrimony";
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleRouteChange = async () => {
      setTransitionState('pageTransition-out');
      await new Promise(resolve => setTimeout(resolve, 200));
      setTransitionState('pageTransition-active')
    };
    handleRouteChange()
  }, [location.pathname])
  
  return (
    <>
      <div
        className={`${
          showLogin ? "popupVisible" : "popupInvisible"
        } absolute top-0 left-0 z-50 w-full h-full flex flex-col justify-center items-center bg-[#00000099] transition-all`}
      >
        <div
          className={`${
            showLogin ? "formVisible" : "formHidden"
          } w-1/2 h-auto px-10 py-6 bg-slate-100 rounded-xl`}
        >
          <Login
            onForgotClick={handleForgotClick}
            onCloseClick={handleCloseClick}
          />
        </div>
      </div>

      <div
        className={`${
          showForgot ? "popupVisible" : "popupInvisible"
        } absolute top-0 left-0 z-50 w-full h-full flex flex-col justify-center items-center bg-[#00000099] transition-all`}
      >
        <div
          className={`${
            showForgot ? "formVisible" : "formHidden"
          } w-1/2 h-auto px-10 py-6 bg-slate-100 rounded-xl`}
        >
          <ForgotPass
            onLoginClick={handleLoginClick}
            onCloseClick={handleCloseClick}
          />
        </div>
      </div>

      <div
        className="bg-slate-200 cursor-default"
        ref={scrollRef}
        data-scroll-container
      >
        <div className={transitionState}>
        <Header onLoginClick={handleLoginClick} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ScrollContainer />
      </Router>
    </>
  );
};

export default App;
