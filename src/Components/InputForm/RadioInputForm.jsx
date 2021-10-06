import { IoMale, IoFemale } from "react-icons/io5";

const RadioInputForm = ({ name, id, value, formValue, onChange }) => {
  return (
    <label
      className={`bg-blue-400 transition-all flex flex-col md:flex-row justify-between items-center cursor-pointer backdrop-blur-md p-5 text-white rounded-md ${
        formValue === value ? "shadow-xl" : "opacity-50"
      }`}
      htmlFor={id}
    >
      <h4
        className={`capitalize header text-xl md:text-2xl flex flex-row items-center md:flex-col md:items-start`}
      >
        <span className={`mr-2`}>{value}</span>
        {value === "male" ? <IoMale /> : <IoFemale />}
      </h4>
      <input
        className={`sr-only`}
        type="radio"
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        checked={formValue === value}
      />
      <div
        className={`rounded-full w-5 h-5 md:w-8 md:h-8 p-0.5 md:p-1 flex items-center justify-center border-2 border-white`}
      >
        <div
          className={`w-full h-full rounded-full ${
            formValue === value ? "bg-white" : "bg-blue-400"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default RadioInputForm;
