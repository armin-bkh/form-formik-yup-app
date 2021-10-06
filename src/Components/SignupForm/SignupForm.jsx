import { useFormik } from "formik";
import * as Yup from "yup";
import InputForm from "../InputForm/InputForm";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string()
    .email("email format is invalid")
    .required("email is required"),
  phoneNumber: Yup.string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "phone number is invalid"),
  password: Yup.string()
    .required("password is required")
    .min(5, "password length must be equal or bigger than 5")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required("password confirmation is required")
    .oneOf([Yup.ref("password"), null], "password must match"),
});

const SignupForm = () => {
  const { handleSubmit, errors, touched, getFieldProps, isValid } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form
      className={`w-full md:max-w-lg rounded-md p-5 bg-pink-400 bg-opacity-30 backdrop-blur-md`}
      onSubmit={handleSubmit}
    >
      <h1
        className={`text-blue-400 text-2xl font-bold md:text-6xl mb-10 ml-3 tracking-wider`}
      >
        Signup
      </h1><fieldset disabled="disabled"></fieldset>
      <InputForm
        {...getFieldProps("name")}
        type="text"
        name="name"
        placeholder="Name..."
        error={errors.name}
        touched={touched.name}
      />
      <InputForm
        {...getFieldProps("email")}
        type="email"
        name="email"
        placeholder="Email..."
        error={errors.email}
        touched={touched.email}
      />
      <InputForm
        {...getFieldProps("phoneNumber")}
        type="text"
        name="phoneNumber"
        placeholder="Phone Number..."
        error={errors.phoneNumber}
        touched={touched.phoneNumber}
      />
      <InputForm
        {...getFieldProps("password")}
        type="text"
        name="password"
        placeholder="Password..."
        error={errors.password}
        touched={touched.password}
      />
      <InputForm
        {...getFieldProps("passwordConfirmation")}
        type="text"
        name="passwordConfirmation"
        placeholder="Password Confirmation..."
        error={errors.passwordConfirmation}
        touched={touched.passwordConfirmation}
      />
      <button
        className={`border border-blue-400 text-blue-400 font-bold tracking-wider outline-none py-2
         w-full rounded-sm mt-7 ${
           isValid ? "hover:text-white hover:bg-blue-400" : "cursor-not-allowed"
         } transition disabled:text-blue-400 disabled:bg-transparent disabled:opacity-30`}
        type="submit"
        disabled={!isValid}
      >
        submit
      </button>
    </form>
  );
};

export default SignupForm;
