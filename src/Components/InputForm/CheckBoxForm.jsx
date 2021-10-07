import styles from "./CheckBoxForm.module.scss";

const CheckBoxForm = ({ name, options, onChange, values, onBlur }) => {
  console.log(values.length)
  return (
    <fieldset className={`flex flex-col mb-5`}>
      <label
        className={`mb-3 text-sm md:text-base capitalize fieldValue font-bold tracking-wider text-gray-300`}
      >
        your knowledge: <span className={`text-gray-500`}>(optional)</span>
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
          className={`${values.length !== 0 ? `w-${values.length}/6` : "w-0"} ${
            values.length > 5 && "rounded-r-md"
          } transition-all ease-in h-full rounded-l-md bg-yellow-400 ${
            styles.labelChecked
          }`}
        ></div>
      </div>
    </fieldset>
  );
};

export default CheckBoxForm;
