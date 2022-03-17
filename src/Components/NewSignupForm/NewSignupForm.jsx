import { Formik, Form } from "formik";
import * as Yup from "yup";
import CheckBoxForm from "../InputForm/CheckBoxForm";
import RadioInputForm from "../InputForm/RadioInputForm";
import SelectBoxForm from "../InputForm/SelectBoxForm";
import TextInputForm from "../InputForm/TextInputForm";
import SingleCheckBoxForm from "../InputForm/SingleCheckBoxForm";
import { useEffect } from "react";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  introduction: "",
  gender: "",
  password: "",
  passwordConfirmation: "",
  Skills: [],
  terms: false,
};

const radios = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];

const checks = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "javascript", value: "js" },
  { label: "jQuery", value: "jquery" },
  { label: "React.js", value: "react" },
  { label: "Redux", value: "redux" },
];

const selects = [
  { label: "Friends", value: "Friends" },
  { label: "Google", value: "Google" },
  { label: "Social network", value: "Social network" },
  { label: "Another ways", value: "Another ways" },
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
  Skills: Yup.array().notRequired(),
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
  terms: Yup.boolean()
    .required()
    .oneOf([true], "You must accept the terms and conditions"),
});

const SignupForm = () => {
  //   const {
  //     handleSubmit,
  //     errors,
  //     touched,
  //     getFieldProps,
  //     isValid,
  //     handleChange,
  //     setFieldValue,
  //     setFieldTouched,
  //     handleBlur,
  //     values,
  //   } = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema,
  //     validateOnMount: true,
  //     enableReinitialize: true,
  //   });

  //   useEffect(() => {
  //     if (values.introduction) {
  //       setFieldTouched("introduction", false);
  //     }
  //   }, [values]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount={true}
      enableReinitialize={true}
    >
      <Form
        className={`w-full md:max-w-lg rounded-md p-5 bg-pink-400 bg-opacity-30 backdrop-filter backdrop-blur-md`}
      >
        <h1
          className={`text-blue-400 text-4xl font-bold md:text-6xl mb-10 ml-3 tracking-wider header`}
        >
          Sign up
        </h1>

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
          value={values.introduction}
          options={selects}
          name="introduction"
          onChange={(opt) => setFieldValue("introduction", opt.value)}
          error={errors.introduction}
          touched={touched.introduction}
          onBlur={() => setFieldTouched("introduction", true)}
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
        <CheckBoxForm
          name="Skills"
          options={checks}
          onChange={handleChange}
          onBlur={handleBlur}
          values={values.Skills}
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
        <SingleCheckBoxForm
          error={errors.terms}
          touched={touched.terms}
          formValue={values.terms}
          name="terms"
          {...getFieldProps("terms")}
        />
        <button
          className={`header border text-sm md:text-base border-blue-400 text-blue-400 font-bold tracking-widest outline-none py-2
         w-full rounded-sm mt-7 ${
           isValid ? "hover:text-white hover:bg-blue-400" : "cursor-not-allowed"
         } transition disabled:text-blue-400 disabled:bg-transparent disabled:opacity-30`}
          type="submit"
          disabled={!isValid}
        >
          submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
