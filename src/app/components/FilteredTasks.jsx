import React from "react";

export const FilteredTasks = ({
  filteredTasks,
  handleCompleted,
  handleDelete,
}) => {
  return (
    <div className="text-stone-500  w-85 gap-1 ">
      {filteredTasks.map((task, index) => {
        return (
          <div
            className="flex justify-between rounded-[5px] bg-gray-100 p-4 h-16 "
            key={index}
          >
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleCompleted(index)}
                className="w-5 h-5 bg-white rounded-xs border border-gray-500"
              ></input>{" "}
              {task.taskName}
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="w-16.75 h-7.5 flex justify-center items-center rounded-[5px] text-[14px] text-red-400 bg-red-100 hover:bg-red-200"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
