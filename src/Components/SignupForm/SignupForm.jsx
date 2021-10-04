import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) =>{
  console.log(values);
}

const validate = (values) =>{
  let errors = {};

  if(!values.name) errors.name = "Name is required";
  if(!values.email) errors.email = "Email is required";
  if(!values.password) errors.password = "Password is required";

  return errors;
}

const SignupForm = () => {
  const { values, handleChange, handleSubmit, errors, handleBlur, touched } = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const { name, email, password } = values;

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
          value={name}
          onBlur={handleBlur}
          onChange={handleChange}
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
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
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
          value={password}
          onBlur={handleBlur}
          onChange={handleChange}
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
