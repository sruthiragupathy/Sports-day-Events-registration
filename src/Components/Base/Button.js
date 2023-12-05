import React, { useCallback } from "react";

const Button = ({
  label,
  onClick = () => {},
  type = "PRIMARY",
  className = "",
}) => {
  const getButtonClass = useCallback(() => {
    if (type === "PRIMARY")
      return `flex justify-center items-center px-4 py-2 bg-slate-700 text-slate-100 rounded-md font-bold hover:bg-slate-800 ${className}`;
    else if (type === "SECONDARY")
      return `flex justify-center items-center px-4 py-2 bg-slate-50 text-slate-700 rounded-md font-bold hover:bg-slate-100 border-2 border-slate-600 ${className}`;
  }, [className, type]);

  const buttonClass = getButtonClass();
  return (
    <button className={`${buttonClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
