"use client";

import { useState } from "react";
import { Input } from "./components/Input";
import { Tab } from "./components/Tab";
import { FilteredTasks } from "./components/FilteredTasks";
import { TotalCount } from "./components/TotalCount";
import { Footer } from "./components/Footer";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [colors, setColors] = useState();
  const completedCount = tasks.filter((task) => task.isCompleted).length;
  const totalCount = tasks.length;
  const FilterButtons = ["All", "Active", "Completed"];
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.isCompleted));
  };
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
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
            <Input
              inputValue={inputValue}
              setInputValue={setInputValue}
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
          <Tab colors={colors} setColors={setColors} />
        </div>
        <FilteredTasks
          filteredTasks={filteredTasks}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
        />
        <TotalCount
          completedCount={completedCount}
          totalCount={totalCount}
          clearCompleted={clearCompleted}
        />

        <Footer />
      </div>
    </div>
  );
}
