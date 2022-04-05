import React from "react";

const LandingPage = () => {
  return (
    <div className=" md:flex justify-center items-center bg-slate-900">
      <div className=" p-5 text-white order-2 md:order-1 md:w-[50%]">
        <h1 className=" text-4xl font-bold mb-2 md:mb-6">
          {" "}
          Rolex Watch
        </h1>
        <p className="text-lg">
        Rolex's story began when founder Hans Wilsdorf created the first waterproof wristwatch  the Oyster  and developed into a range of timepieces that have become icons of watchmaking. Discover Rolex watches on the wrists of pioneers, artists, athletes and visionaries and journey to the very highest summits and the deepest part of the oceans.
        </p>
        <button className=" bg-slate-500 p-2 mt-4 rounded hover:bg-sky-400">Live Demo</button>
      </div>
      <div className="order-1">
        <img className=" rounded-[50px] p-9" src="https://i.ibb.co/yffL6Ds/picture-1.jpg" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;