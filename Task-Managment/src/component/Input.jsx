import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, testarea, ...props },ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-2 00 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {testarea ? (
        <testarea
          ref={ref} className="w-full p-[1.35rem] border-b-2 rounded-sm border-stone-300 bg-stone-2 00 text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
        />
      ) : (
        <input ref={ref} className={classes} type="text" {...props}></input>
      )}
    </p>
  );
});
export default Input;
