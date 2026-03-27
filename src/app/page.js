"use client";

import { useState } from "react";
import { Input } from "./components/Input";
import { Tab } from "./components/Tab";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [colors, setColors] = useState();
  const completedCount = tasks.filter((task) => task.isCompleted).length;
  const totalCount = tasks.length;
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.isCompleted));
  };
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const handleClick = () => {
    setTasks([{ taskName: inputValue, isCompleted: false }, ...tasks]);
    setInputValue("");
  };
  const handleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task,
    );
    setTasks(updatedTasks);
  };
  const filteredTasks = tasks.filter((task) => {
    if (colors === 1) return !task.isCompleted;
    if (colors === 2) return task.isCompleted;
    return true;
  });

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-black w-120 h-fit flex flex-col p-5 items-center shadow-md bg-stone-50 rounded-md gap-10">
        <div className="gap-5 flex flex-col items-center">
          <h1 className="text-2xl font-bold ">To-Do list</h1>

          <div className="flex gap-1.5">
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            <button
              disabled={inputValue === ""}
              onClick={handleClick}
              className="bg-blue-600 h-10 w-14 text-white justify-center items-center flex rounded-md py-2 px-4 hover:opacity-80"
            >
              Add
            </button>
          </div>
          <Tab setColors={setColors} />
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
        </div>
        <div className="text-stone-500  w-85 gap-1 ">
          {filteredTasks.map((task, index) => {
            return (
              <div
                className="flex justify-between rounded-[5px] bg-gray-100 p-4 h-16 "
                key={index}
              >
                <div className="flex items-center gap-[10px]">
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => handleCompleted(index)}
                    className="w-5 h-5 bg-white rounded-[2px] border-[1px] border-gray-500"
                  ></input>{" "}
                  {task.taskName}
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="w-[67px] h-[30px] flex justify-center items-center rounded-[5px] text-[14px] text-red-400 bg-red-100 hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-85 flex justify-between text-sm text-stone-500">
          <span>
            {completedCount} of {totalCount} completed
          </span>
          <button
            onClick={clearCompleted}
            disabled={completedCount === 0}
            className={`${
              completedCount === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-red-400 hover:underline"
            }`}
          >
            Clear Completed
          </button>
        </div>

        <div className="flex gap-1">
          <div className="text-stone-500">Powered by</div>
          <div className="text-blue-500">Pinecone Academy</div>
        </div>
      </div>
    </div>
  );
}
