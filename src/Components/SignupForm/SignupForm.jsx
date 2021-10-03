import { useState } from "react";

const SignupForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValue)
  };

  const { name, email, password } = formValue;

  return (
    <form
      className={`w-full md:max-w-lg rounded-md p-5 bg-pink-400 bg-opacity-30 backdrop-blur-md`}
      onSubmit={submitHandler}
    >
      <h1 className={`text-blue-400 text-2xl md:text-5xl mb-10`}>Signup</h1>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Name:</label>
        <input
          className={`px-2 py-1 rounded-md placeholder-gray-500 bg-transparent border border-gray-500 outline-none`}
          type="text"
          name="name"
          placeholder="Name..."
          value={name}
          onChange={changeHandler}
        />
      </fieldset>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Email:</label>
        <input
          className={`px-2 py-1 rounded-md placeholder-gray-500 bg-transparent border border-gray-500 outline-none`}
          type="text"
          name="email"
          placeholder="Email..."
          value={email}
          onChange={changeHandler}
        />
      </fieldset>
      <fieldset className={`flex flex-col mb-5 text-gray-300`}>
        <label className={`mb-3 font-bold`}>Password:</label>
        <input
          className={`px-2 py-1 rounded-md placeholder-gray-500 bg-transparent border border-gray-500 outline-none`}
          type="text"
          name="password"
          placeholder="Password..."
          value={password}
          onChange={changeHandler}
        />
      </fieldset>
      <button
        className={`border border-blue-400 text-blue-400 font-bold outline-none py-2 w-full rounded-md mt-7 hover:text-white hover:bg-blue-400 transition`}
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default SignupForm;
