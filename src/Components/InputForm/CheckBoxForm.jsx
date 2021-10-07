import styles from './CheckBoxForm.module.scss';

const CheckBoxForm = ({ name, options, onChange, values, onBlur }) => {
  return (
    <fieldset className={`flex flex-col mb-5`}>
      <label
        className={`mb-3 capitalize fieldValue font-bold tracking-wider text-gray-300`}
      >
        your knowledge: <span className={`text-gray-500`}>(optional)</span>
      </label>
      <div className={`flex w-full justify-between items-center mb-7`}>
        {options.map((op) => (
          <label
            className={`px-3 py-1 transition rounded-md flex-grow-1 header text-sm md:text-base cursor-pointer ${
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
      <div
        className={`w-full h-2 bg-blue-400 bg-opacity-30 rounded-full`}
      >
        <div
          className={`${
            values.length !== 0 ? `w-${values.length}/6` : "w-0"
          } ${values.length > 5 && 'rounded-r-md'} transition-all ease-in h-full rounded-l-md bg-blue-400 ${styles.labelChecked}`}
        ></div>
      </div>
    </fieldset>
  );
};

export default CheckBoxForm;
