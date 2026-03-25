import React from "react";

export const Input = ({ setInputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex gap-1.5 rounded-md border w-72">
      <input
        onChange={handleChange}
        className=" w-72 rounded-md hover:border-blue-700 hover:border-2"
      />
    </div>
  );
};
