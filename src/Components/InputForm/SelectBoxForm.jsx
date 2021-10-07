import Select from "react-select";

const SelectBoxForm = ({name, value, options ,error, touched, onChange, onBlur}) => {

    const colourStyles = {
        singleValue: (provided) => ({
            ...provided,
            color: '#fff'
        }),
        control: (styles, isFocused) => ({ ...styles, backgroundColor: '#60A5FA', fontFamily: 'fieldValue', border: isFocused ? 'none' : 'none', outline: isFocused ? 'none' : 'none',}),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isSelected && '#60A5FA',
            color: isSelected ? '#D1D5DB' : "#60A5FA",
            cursor: isSelected ? 'not-allowed' : 'pointer',
            fontFamily: 'fieldValue',
          };
        },
      };

    return ( 
        <fieldset className={`mb-5 flex flex-col text-gray-300`}>
            <label className={`mb-3 text-sm md:text-base capitalize fieldValue font-bold tracking-wider`}>How to get know us?</label>
            {/* <select className={`px-2 py-1 bg-transparent fieldValue border-b border-blue-400 outline-none`} name={name} {...rest}>
            {
                options.map((op)=> (
                    <option className={`text-black`} key={op.value} value={op.value}>{op.label}</option>
                ))
            }
            </select> */}
            <Select className={`placeholder-gray-300`} placeholder="select..." styles={colourStyles} options={options} name={name} value={value} onChange={(opt, e) => onChange(opt, e)} onBlur={onBlur}/>
        {error && touched && <span className={`text-red-500 text-sm mt-1 ml-3 title`}>{error}</span>}
        </fieldset>
     );
}
 
export default SelectBoxForm;