import React from "react";

export const Tab = () => {
  function MyButton() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <div className="flex gap-1.5 w-87 ">
          <button onClick={handleClick}>
            {isOpen ? (
              <div className="bg-stone-200 py-1 px-3 rounded-md text-white ">
                All
              </div>
            ) : (
              <div className="bg-blue-600 py-1 px-3 rounded-md text-white ">
                All
              </div>
            )}
          </button>
          <div className="bg-stone-200 py-1 px-3 rounded-md">Active</div>
          <div className="bg-stone-200 py-1 px-3 rounded-md">Completed</div>
        </div>
      </div>
    );
  }
};
