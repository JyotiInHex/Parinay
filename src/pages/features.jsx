import React from "react";
import { Link } from "react-router-dom";

const services = () => {
  return (
    <>
      <div className="w-full h-auto p-5">
        <figure className="p-6 mr-5 ml-5 mb-5 rounded-3xl bg-gradient-to-tr">
          <h1 className="text-9xl text-gray-500 text-shadow-sm font-bold font-opensans relative">
            <sup className="text-base font-semibold underline">
              <Link to="/">(Home)</Link>
            </sup>
            Features
          </h1>
        </figure>
        <div className="bg-white w-full h-full p-10 rounded-2xl">
          <h6 className="px-5 text-justify text-lg text-zinc-700 font-lato font-medium">
            At <strong>Parinay</strong>, we flatter ourselves on offering a
            comprehensive set of features that enhance your online courting
            experience. Our platform is designed to make chancing your perfect
            Assamese match both pleasurable and effective. Then’s what you can
            anticipate from our point-rich app -
          </h6>
          <ul className="flex flex-wrap gap-x-5 gap-y-9 px-5 mt-10 mb-5">
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-user-search-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#f44336]"></i>
              <h5 className="text-lg text-[#f44336] font-lato font-semibold mt-3">Advanced Search Pollutants</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Narrow down your hunt with customizable pollutants including age, position, interests, and more. Find someone who impeccably matches your criteria.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-check-double-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#9c27b0]"></i>
              <h5 className="text-lg text-[#9c27b0] font-lato font-semibold mt-3">Vindicated Biographies</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Your safety is our precedence. All biographies on Parinay.com are vindicated to insure you connect with real and genuine individualities.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-user-heart-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#e91e63]"></i>
              <h5 className="text-lg text-[#e91e63] font-lato font-semibold mt-3">Smart Matching Algorithm</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Our intelligent matching algorithm analyses your preferences, interests, and gets to suggest compatible matches, adding your chances of chancing a meaningful connection.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-message-3-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#1e88e5]"></i>
              <h5 className="text-lg text-[#1e88e5] font-lato font-semibold mt-3">In-App Messaging</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Communicate painlessly with implicit matches through our secure and stoner-friendly messaging system. Start exchanges and get to know each other better without leaving the app.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-user-settings-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#673ab7]"></i>
              <h5 className="text-lg text-[#673ab7] font-lato font-semibold mt-3">Profile Customization</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Show your personality with detailed profile sections. Add prints, write about your interests, and punctuate what you ’re looking for in a mate to attract like- inclined individualities.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-shield-check-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#43a047]"></i>
              <h5 className="text-lg text-[#43a047] font-lato font-semibold mt-3">Sequestration and Security</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato"> We value your sequestration. Parinay.com employs robust security measures to cover your data and insure a safe courting terrain.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-user-settings-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#0097a7]"></i>
              <h5 className="text-lg text-[#0097a7] font-lato font-semibold mt-3">Artistic Connection</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Engage with a community that shares your artistic background and values. share in conversations, share gests, and celebrate Assamese traditions together.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-hearts-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#c2185b]"></i>
              <h5 className="text-lg text-[#c2185b] font-lato font-semibold mt-3">Daily Match Recommendations</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Receive diurnal match recommendations grounded on your preferences and exertion, helping you discover implicit mates you might have missed.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-quill-pen-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#1a4961]"></i>
              <h5 className="text-lg text-[#1a4961] font-lato font-semibold mt-3">Easy Registration</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Getting started with Parinay.com is quick and hassle-free. subscribe up with just a many way and begin your trip towards chancing love.</p>
            </li>
            <li className="relative w-[49%] h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-calendar-event-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#4083ff]"></i>
              <h5 className="text-lg text-[#4083ff] font-lato font-semibold mt-3">Events and Conditioning</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Stay updated with original events and conditioning acclimatized for the Assamese community. Join gatherings, meet new people, and make connections beyond the virtual world.</p>
            </li>
            <li className="relative w-full h-auto bg-transparent rounded-lg border-2 p-5">
              <i className="ri-customer-service-2-line absolute -top-6 left-3 w-8 h-8 p-5 border-2 bg-white flex items-center justify-center rounded-lg text-2xl text-[#4083ff]"></i>
              <h5 className="text-lg text-[#4083ff] font-lato font-semibold mt-3">Client Support</h5>
              <p className="text-lg text-zinc-700 text-justify font-lato">Our devoted client support platoon is then to help you with any queries or enterprises, icing a smooth and pleasurable experience on our platform.</p>
            </li>
          </ul>
          <h6 className="px-5 text-justify"><Link className="underline text-blue-700 font-semibold" to="/register">Join Parinay.com</Link> moment and explore these features designed to help you find your perfect Assamese match. Your trip to love thresholds then!</h6>
        </div>
      </div>
    </>
  );
};

export default services;
