import React from "react";

export const TotalCount = ({ completedCount, totalCount, clearCompleted }) => {
  return (
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
  );
};
