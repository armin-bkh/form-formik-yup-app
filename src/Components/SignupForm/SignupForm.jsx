import { useFormik } from "formik";
import * as Yup from "yup";
import RadioInputForm from "../InputForm/RadioInputForm";
import SelectBoxForm from "../InputForm/SelectBoxForm";
import TextInputForm from "../InputForm/TextInputForm";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  introduction: "",
  gender: "",
  password: "",
  passwordConfirmation: "",
};

const radios = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];

const selects = [
  { label: "Select...", value: "" },
  { label: "Friends", value: "friends" },
  { label: "Google", value: "google" },
  { label: "Social network", value: "network" },
  { label: "Another ways", value: "another" },
];

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
  gender: Yup.string().required("choose your gender is required"),
  introduction: Yup.string().required("introduction is required"),
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
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    isValid,
    handleChange,
    setFieldValue,
    setFieldTouched,
    handleBlur,
    values,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <form
      className={`w-full md:max-w-lg rounded-md p-5 bg-pink-400 bg-opacity-30 backdrop-blur-md`}
      onSubmit={handleSubmit}
    >
      <h1
        className={`text-blue-400 text-2xl font-bold md:text-6xl mb-10 ml-3 tracking-wider header`}
      >
        Sign up
      </h1>
      <fieldset disabled="disabled"></fieldset>
      <TextInputForm
        {...getFieldProps("name")}
        type="text"
        name="name"
        placeholder="Name..."
        error={errors.name}
        touched={touched.name}
      />
      <TextInputForm
        {...getFieldProps("email")}
        type="email"
        name="email"
        placeholder="Email..."
        error={errors.email}
        touched={touched.email}
      />
      <TextInputForm
        {...getFieldProps("phoneNumber")}
        type="text"
        name="phoneNumber"
        placeholder="Phone Number..."
        error={errors.phoneNumber}
        touched={touched.phoneNumber}
      />
      <SelectBoxForm
        value={{ label: values.introduction }}
        options={selects}
        name="introduction"
        onChange={(opt, e) => {
          setFieldValue("introduction", opt.value);
        }}
        onBlur={() => setFieldTouched("introduction", true)}
        error={errors.introduction}
        touched={touched.introduction}
      />
      <RadioInputForm
        options={radios}
        onChange={handleChange}
        onBlur={handleBlur}
        name="gender"
        formValue={values.gender}
        error={errors.gender}
        touched={touched.gender}
      />
      <TextInputForm
        {...getFieldProps("password")}
        type="password"
        name="password"
        placeholder="Password..."
        error={errors.password}
        touched={touched.password}
      />
      <TextInputForm
        {...getFieldProps("passwordConfirmation")}
        type="password"
        name="passwordConfirmation"
        placeholder="Password Confirmation..."
        error={errors.passwordConfirmation}
        touched={touched.passwordConfirmation}
      />
      <button
        className={`header border border-blue-400 text-blue-400 font-bold tracking-widest outline-none py-2
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
