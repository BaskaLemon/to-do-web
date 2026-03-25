import React from "react";

export const Tab = ({ setFilter }) => {
  const handleClick = () => {
    setFilter(filter);
  };
  return (
    <div className="flex gap-1.5 w-87 ">
      <button
        onClick={handleClick}
        className="bg-stone-200 py-1 px-3 rounded-md"
      >
        All
      </button>
      <button className="bg-stone-200 py-1 px-3 rounded-md">Active</button>
      <button className="bg-stone-200 py-1 px-3 rounded-md">Completed</button>
    </div>
  );
};
