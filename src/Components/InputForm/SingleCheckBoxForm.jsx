import { BiCheck } from "react-icons/bi";

const SingleCheckBoxForm = ({name, formValue, error, touched, ...rest}) => {
    return ( 
        <fieldset className={`mb-5 text-sm  md:text-base text-gray-300`}>
        <input
          className={`sr-only`}
          type="checkbox"
          id={name}
          name={name}
          value={true}
          {...rest}
        />
        <label className={`fieldValue text-sm md:text-base flex items-center`} htmlFor={name}>
          <span
            className={`mr-3 rounded-sm border-2 border-blue-400 w-6 h-6 flex items-center justify-center text-xl text-blue-400 cursor-pointer`}
          >
            {formValue && <BiCheck />}
          </span>
          Accept all terms and conditions
        </label>
        {error && touched && <span className={`text-red-500 text-sm mt-1 ml-3 title`}>{error}</span>}
      </fieldset>
     );
}
 
export default SingleCheckBoxForm;