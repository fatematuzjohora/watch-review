import React from "react";

const LandingPage = () => {
  return (
    <div className=" md:flex justify-center items-center bg-slate-900">
      <div className=" p-5 text-white order-2 md:order-1 md:w-[50%]">
        <h1 className=" text-4xl font-bold mb-2 md:mb-6">
          {" "}
          Avocado-and-Egg-Toast
        </h1>
        <p className="text-lg">
        The combination of fiber, protein, and healthy fats is filling, satisfying, and provides lots of nutrition to start your day. Avocados are a great source of potassium, fiber, heart-healthy monounsaturated fat, and folate, while eggs provide protein and micronutrients like choline, B vitamins, and vitamin D.
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