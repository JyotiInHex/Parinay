import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col gap-2 items-center justify-center">
      <h3 className="text-[15rem] bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent font-playfair font-semibold pointer-events-none drop-shadow-2xl">
        404
      </h3>
      <h6 className="text-2xl text-zinc-700 font-opensans font-medium">Nothing ahead</h6>
      <Link to="/" className="buttonEffect-1 mt-3 border-2 border-zinc-700 rounded-full px-5 py-1 text-lg text-zinc-700 font-lato font-semibold hover:text-slate-50">Back to home</Link>
    </div>
  );
};

export default NotFound;
