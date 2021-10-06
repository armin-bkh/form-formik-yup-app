const InputForm = ({ type, name, error, touched, ...rest }) => {
    return ( 
        <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold capitalize`}>{name}:</label>
        <input
          className={`px-2 py-1 placeholder-gray-500 font-medium bg-transparent border-b-2
           border-blue-400 outline-none`}
          type={type}
          name={name}
          {...rest}
        />
        {error && touched && <span className={`text-red-500 text-xs mt-1 ml-3`}>{error}</span>}
      </fieldset>
     );
}
 
export default InputForm;