const TextInputForm = ({ type, name, error, touched, ...rest }) => {
    return ( 
        <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 text-sm md:text-base capitalize fieldValue font-bold tracking-wider`}>{name}:</label>
        <input
          className={`px-2 py-1 text-sm md:text-base placeholder-gray-500 font-medium bg-transparent border-b-2
           border-blue-400 outline-none fieldValue`}
          type={type}
          name={name}
          {...rest}
        />
        {error && touched && <span className={`text-red-500 text-sm mt-1 ml-3 title`}>{error}</span>}
      </fieldset>
     );
}
 
export default TextInputForm;