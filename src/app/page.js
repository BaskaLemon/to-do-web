"use client";

import { useState } from "react";
import { Input } from "./components/Input";
import { Tab } from "./components/Tab";

export default function Home() {
  const [index, setIndex] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState();
  const handleClick = () => {
    setIndex([inputValue, ...index]);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-black w-120 h-fit flex flex-col p-5 items-center shadow-md bg-stone-50 rounded-md gap-10">
        <div className="gap-5 flex flex-col items-center">
          <h1 className="text-2xl font-bold ">To-Do list</h1>

          <div className="flex gap-1.5">
            <Input setInputValue={setInputValue} />
            <button
              onClick={handleClick}
              className="bg-blue-600 h-10 w-14 text-white justify-center items-center flex rounded-md py-2 px-4 hover:opacity-80"
            >
              Add
            </button>
          </div>
          <Tab />
        </div>
        <div className="text-stone-500  w-85 gap-1 ">
          {index.map((task, index) => {
            return (
              <div
                className="flex justify-between rounded-[5px] bg-gray-100 p-4 h-16 "
                key={index}
              >
                <div className="flex items-center gap-[10px]">
                  <div className="w-5 h-5 bg-white rounded-[2px] border-[1px] border-gray-500"></div>{" "}
                  {task}
                </div>
                <button className="w-[67px] h-[30px] flex justify-center items-center rounded-[5px] text-[14px] text-red-400 bg-red-100">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex gap-1">
          <div className="text-stone-500">Powered by</div>
          <div className="text-blue-500">Pinecone Academy</div>
        </div>
      </div>
    </div>
  );
}
