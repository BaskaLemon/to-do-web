"use client";
import React from "react";

export const Tab = ({ colors, setColors }) => {
  return (
    <div className="flex gap-1.5 w-87 ">
      {[0].map((index) => (
        <button
          key={index}
          onClick={() => setColors(index)}
          className={`transition duration-300 py-1 px-3 rounded-md ${colors === index ? "bg-blue-500" : "bg-stone-200 hover:bg-stone-300"}`}
        >
          All
        </button>
      ))}
      {[1].map((index) => (
        <button
          key={index}
          onClick={() => setColors(index)}
          className={`transition duration-300 py-1 px-3 rounded-md ${colors === index ? "bg-blue-500" : "bg-stone-200 hover:bg-stone-300"}`}
        >
          Active
        </button>
      ))}
      {[2].map((index) => (
        <button
          key={index}
          onClick={() => setColors(index)}
          className={`transition duration-300 py-1 px-3 rounded-md ${colors === index ? "bg-blue-500" : "bg-stone-200 hover:bg-stone-300"}`}
        >
          Completed
        </button>
      ))}
    </div>
  );
};
