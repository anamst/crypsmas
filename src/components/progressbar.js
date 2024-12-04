import React from "react";

const ProgressBar = ({ value, target, className = "" }) => {
  const progressPercentage = Math.min((value / target) * 100, 100); // Ensure progress doesn't exceed 100%

  return (
    <div
      className={`
        ${className}
        relative w-full h-14 rounded-full bg-white shadow-md
        overflow-hidden
      `}
    >
      {/* Progress fill */}
      <div
        className="absolute left-0 top-0 h-full bg-red transition-all duration-300 ease-in-out rounded-full"
        style={{ width: `${progressPercentage}%` }}
      >
        {/* Progress text */}
        <div
          className="h-full flex items-center justify-center text-white font-medium"
          style={{ minWidth: "fit-content" }}
        >
          {value} EUR
        </div>
      </div>
      {/* Background text (to keep the number visible even when progress is too small) */}
      {progressPercentage < 20 && (
        <div className="absolute inset-0 flex items-center justify-center text-red font-medium">
          {value} EUR
        </div>
      )}
    </div>
  );
};

export default ProgressBar;

