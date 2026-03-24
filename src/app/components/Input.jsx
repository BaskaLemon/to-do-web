import React from "react";

export const Input = () => {
  return (
    <div className="flex gap-1.5">
      <input className="border w-72 rounded-md hover:border-blue-700 hover:border-2" />
      <div className="bg-blue-600 h-10 w-14 text-white justify-center items-center flex rounded-md py-2 px-4">
        Add
      </div>
    </div>
  );
};
