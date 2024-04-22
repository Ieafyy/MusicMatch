import React from "react";

const InputField = ({ placeholder, type, icon, className }) => {
  return (
    <div className={`relative h-16 ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        className="py-2 rounded-xl pl-14 text-2xl"
      />
      <i className={`${icon} absolute top-2 left-5 text-2xl`} />
    </div>
  );
};

export default InputField;
