import React from "react";

type Props = {
  id:string
  onChange:any
  value:string
  lable:string
  type?:string
};

export default function Input({id, onChange, value, lable, type}: Props) {
  return (
    <div className="relative">
      <input
      type={type}
      value={value}
      onChange={onChange}
      id={id}
        className="
        block
        rounded-md
        bg-neutral-700
        text-white
        appreance-none
        text-md
        w-full
        px-6
        pt-6
        pb-1
        focus:outline-none
        focus:ring-0
        peer
    "
        placeholder=" "
      />
      <label 
      className="
        absolute
        text-zinc-400
        text-md
        duration-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "

      
      htmlFor={id}>
        {lable}
      </label>
    </div>
  );
}
