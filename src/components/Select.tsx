import { IoIosArrowDown } from "react-icons/io";
import React from "react";

type SelectProps = {
  title: string;
  options: Array<any>;
};

function Select({ title, options }: SelectProps) {
  return (
    <div className="relative">
      <select
        defaultValue=""
        className="w-24 appearance-none bg-white  border border-gray-300 p-4"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default Select;
