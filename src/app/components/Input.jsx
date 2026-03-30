import React from "react";

export const Input = ({ setInputValue, inputValue, tasks, setTasks }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    setTasks([{ taskName: inputValue, isCompleted: false }, ...tasks]);
    setInputValue("");
  };

  return (
    <div className="flex gap-1.5 rounded-md ">
      <input
        value={inputValue}
        onChange={handleChange}
        className=" w-72 border rounded-md hover:border-blue-700 hover:border-2"
      />
      <button
        disabled={inputValue === ""}
        onClick={handleClick}
        className="bg-blue-600 h-10 w-14 text-white justify-center items-center flex rounded-md py-2 px-4 hover:opacity-80"
      >
        Add
      </button>
    </div>
  );
};
