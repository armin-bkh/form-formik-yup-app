import { useEffect } from "react";
import styles from "./CheckBoxForm.module.scss";

const CheckBoxForm = ({ name, options, onChange, values, onBlur }) => {
  let width = 'w-0';
  if(values.length === 6){
    width = 'w-full'
  }
  if(values.length > 0 && values.length < 6){
    width = `w-${values.length}/6`
  }
  return (
    <fieldset className={`flex flex-col mb-5`}>
      <label
        className={`mb-3 text-sm md:text-base capitalize fieldValue font-bold tracking-wider text-gray-300`}
      >
        your Skills: <span className={`text-gray-500`}>(optional)</span>
      </label>
      <div className={`grid w-full grid-cols-3 md:grid-cols-6 gap-y-2 gap-x-2 mb-7`}>
        {options.map((op) => (
          <label
            className={`px-2 py-2 flex justify-center items-center transition rounded-md text-xs header cursor-pointer ${
              values.includes(op.value) ? styles.labelChecked : "opacity-50"
            } bg-blue-400 text-gray-300`}
            htmlFor={op.value}
            key={op.value}
          >
            <input
              className={`sr-only`}
              type="checkbox"
              id={op.value}
              name={name}
              value={op.value}
              onChange={onChange}
              onBlur={onBlur}
              checked={values.includes(op.value)}
            />
            {op.label}
          </label>
        ))}
      </div>
      <div className={`w-full h-2 bg-blue-400 bg-opacity-30 rounded-full`}>
        <div
          className={`${width} ${
            values.length > 5 && "rounded-r-md"
          } w-0 transition-all ease-in h-full rounded-l-md bg-blue-400 ${
            styles.labelChecked
          }`}
        ></div>
      </div>
    </fieldset>
  );
};

export default CheckBoxForm;
