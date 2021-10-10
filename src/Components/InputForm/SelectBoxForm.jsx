import Select from "react-select";

const SelectBoxForm = ({
  name,
  value,
  options,
  error,
  touched,
  onChange,
  onBlur,
}) => {

  const colourStyles = {
    placeholder: (prev) => ({
      ...prev,
      color: '#fff',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    control: (styles, isFocused) => ({
      ...styles,
      backgroundColor: "#60A5FA",
      fontFamily: "fieldValue",
      border: isFocused ? "none" : "none",
      outline: isFocused ? "none" : "none",
      cursor: 'pointer',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected && "#60A5FA",
        color: isSelected ? "#D1D5DB" : "#60A5FA",
        cursor: isSelected ? "not-allowed" : "pointer",
        fontFamily: "fieldValue",
      };
    },
  };

  const costumValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : null;
  };

  return (
    <fieldset className={`mb-5 flex flex-col text-gray-300`}>
      <label
        className={`mb-3 text-sm md:text-base capitalize fieldValue font-bold tracking-wider`}
      >
        How to get know us?
      </label>
      <Select
        className={`placeholder-white`}
        styles={colourStyles}
        options={options}
        name={name}
        value={costumValue(options, value)}
        onChange={(opt) => onChange(opt)}
        onBlur={onBlur}
      />
      { touched && error && (
        <span className={`text-red-500 text-sm mt-1 ml-3 title`}>{error}</span>
      )}
    </fieldset>
  );
};

export default SelectBoxForm;
