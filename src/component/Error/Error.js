import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex justify-center mt-20 ">
        <h1 className=" text-9xl font-semibold text-red-500">404</h1>
        <small className="text-lg font-semibold text-red-400">Error</small>
      </div>
      <p className=" text-xl font-bold text-center text-red-600 mt-3">
        This page is not found
      </p>
      <div className=" flex justify-center items-center mt-16">
        <Link to={"/"}>
          <button className=" text-indigo-600 font-bold text-lg bg-slate-300 p-2 rounded inline-flex">
            Go to home page{" "}
            <ArrowRightIcon className="h-7 w-7 ml-2"></ArrowRightIcon>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;