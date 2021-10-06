import { IoMale, IoFemale } from "react-icons/io5";
import styles from "./RadioInputForm.module.scss";

const RadioInputForm = ({
  name,
  formValue,
  onChange,
  options,
  error,
  touched,
}) => {
  return (
    <fieldset className={`grid grid-cols-2 gap-x-3 mb-5`}>
      <label
        className={`mb-3 capitalize fieldValue font-bold tracking-wider text-gray-300 col-span-2`}
      >
        Gender:
      </label>
      {options.map((op) => (
        <label
          key={op.value}
          className={`bg-blue-400 transition-all flex flex-col md:flex-row justify-between items-center cursor-pointer backdrop-blur-md p-5 text-white rounded-md ${
            formValue === op.value ? styles.labelChecked : "opacity-50"
          }`}
          htmlFor={op.label}
        >
          <h4
            className={`capitalize header text-xl md:text-2xl flex flex-row items-center md:flex-col md:items-start`}
          >
            <span className={`mr-2`}>{op.label}</span>
            {op.value === "0" ? <IoMale /> : <IoFemale />}
          </h4>
          <input
            className={`sr-only`}
            type="radio"
            id={op.label}
            value={op.value}
            name={name}
            onChange={onChange}
            checked={formValue === op.value}
          />
          <div
            className={`rounded-full w-5 h-5 md:w-8 md:h-8 p-0.5 md:p-1 flex items-center justify-center border-2 border-white`}
          >
            <div
              className={`w-full h-full rounded-full ${
                formValue === op.value ? "bg-white" : "bg-blue-400"
              }`}
            ></div>
          </div>
        </label>
      ))}
      {error && touched && (
        <span className={`text-red-500 text-sm mt-1 ml-3 title`}>{error}</span>
      )}
    </fieldset>
  );
};

export default RadioInputForm;
