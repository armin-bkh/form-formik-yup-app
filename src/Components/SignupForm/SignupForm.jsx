import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) =>{
  console.log(values);
}

const validationSchema = Yup.object({
  name: Yup.string().required('name is required'),
  email: Yup.string().email('email format is invalid').required('email is required'),
  password: Yup.string().required('password is required')
})

const SignupForm = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form
      className={`w-full md:max-w-lg rounded-md p-5 bg-pink-400 bg-opacity-30 backdrop-blur-md`}
      onSubmit={handleSubmit}
    >
      <h1 className={`text-blue-400 text-2xl font-bold md:text-6xl mb-10 ml-3 tracking-wider`}>
        Signup
      </h1>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Name:</label>
        <input
          className={`px-2 py-1 placeholder-gray-500 font-medium bg-transparent border-b-2
           border-blue-400 outline-none`}
          type="text"
          name="name"
          placeholder="Name..."
          {...getFieldProps('name')}
        />
        {errors.name && touched.name && <span className={`text-red-500 text-xs mt-1 ml-3`}>{errors.name}</span>}
      </fieldset>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Email:</label>
        <input
          className={`px-2 py-1 placeholder-gray-500 font-medium bg-transparent border-b-2
           border-blue-400 outline-none`}
          type="text"
          name="email"
          placeholder="Email..."
          {...getFieldProps('email')}

        />
        {errors.email && touched.email && <span className={`text-red-500 text-xs mt-1 ml-3`}>{errors.email}</span>}
      </fieldset>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Password:</label>
        <input
          className={`px-2 py-1 placeholder-gray-500 font-medium bg-transparent border-b-2
           border-blue-400 outline-none`}
          type="text"
          name="password"
          placeholder="Password..."
          {...getFieldProps('password')}
        />
        {errors.password && touched.password && <span className={`text-red-500 text-xs mt-1 ml-3`}>{errors.password}</span>}
      </fieldset>
      <button
        className={`border border-blue-400 text-blue-400 font-bold tracking-wider outline-none py-2 w-full rounded-sm mt-7 hover:text-white hover:bg-blue-400 transition`}
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default SignupForm;
