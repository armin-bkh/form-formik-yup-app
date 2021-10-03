import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const SignupForm = () => {
  const formik = useFormik({
    initialValues,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formik.values);
  };

  return (
    <form
      className={`w-full md:max-w-lg rounded-md p-5 bg-pink-400 bg-opacity-30 backdrop-blur-md`}
      onSubmit={submitHandler}
    >
      <h1 className={`text-blue-400 text-2xl md:text-5xl mb-10 tracking-wider`}>
        Signup
      </h1>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Name:</label>
        <input
          className={`px-2 py-1 placeholder-gray-500 font-medium bg-transparent border-b-2 border-blue-400 outline-none`}
          type="text"
          name="name"
          placeholder="Name..."
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </fieldset>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Email:</label>
        <input
          className={`px-2 py-1 placeholder-gray-500 font-medium bg-transparent border-b-2 border-blue-400 outline-none`}
          type="text"
          name="email"
          placeholder="Email..."
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </fieldset>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Password:</label>
        <input
          className={`px-2 py-1 placeholder-gray-500 font-medium bg-transparent border-b-2 border-blue-400 outline-none`}
          type="text"
          name="password"
          placeholder="Password..."
          value={formik.values.password}
          onChange={formik.handleChange}
        />
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
