import { Formik, Form, Field, ErrorMessage } from "formik";
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

const NewSignupForm = () => {
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

        <fieldset>
          <label htmlFor="name">name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" />
        </fieldset>
        <fieldset>
          <label htmlFor="passwordConfirmation">password confirmation</label>
          <Field
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
          />
          <ErrorMessage name="passwordConfirmation" />
        </fieldset>
        <button
          className={`header border text-sm md:text-base border-blue-400 text-blue-400 font-bold tracking-widest outline-none py-2
         w-full rounded-sm mt-78`}
          type="submit"
          //   disabled={!isValid}
        >
          submit
        </button>
      </Form>
    </Formik>
  );
};

export default NewSignupForm;
