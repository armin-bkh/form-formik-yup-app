import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  comment: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  children: [""],
};

const onSubmit = (values, formik) => {
  console.log(values);
  formik.setSubmitting(false);
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
  comment: Yup.string().required("comment is required"),
  address: Yup.string().required("address is required"),
  social: Yup.object({
    facebook: Yup.string().required("facebook profile is required"),
    twitter: Yup.string().required("twitter profile is required"),
  }),
});

const NewSignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount={true}
      enableReinitialize={true}
    >
      {(formik) => (
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
            <ErrorMessage name="email">
              {(error) => <span style={{ color: "red" }}>{error}</span>}
            </ErrorMessage>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component={ErrorMsg} />
          </fieldset>
          <fieldset>
            <label htmlFor="passwordConfirmation">password confirmation</label>
            <Field
              type="password"
              id="passwordConfirmation"
              name="passwordConfirmation"
            />
            <ErrorMessage name="passwordConfirmation" component="span" />
          </fieldset>
          <fieldset>
            <label htmlFor="comment">comment</label>
            <Field as="textarea" id="comment" name="comment" />
            <ErrorMessage name="comment" />
          </fieldset>
          <fieldset>
            <label htmlFor="address">address</label>
            <Field name="address">
              {(props) => (
                <>
                  <input type="text" id="address" {...props.field} />
                  {props.meta.error && props.meta.touched && (
                    <span>{props.meta.error}</span>
                  )}
                </>
              )}
            </Field>
          </fieldset>
          <fieldset>
            <label htmlFor="facebook">facebook profile</label>
            <Field type="text" id="facebook" name="social.facebook" />
            <ErrorMessage name="social.facebook" component="span" />
          </fieldset>
          <fieldset>
            <label htmlFor="twitter">twitter profile</label>
            <Field type="text" id="twitter" name="social.twitter" />
            <ErrorMessage name="social.twitter" component="span" />
          </fieldset>
          <fieldset>
            <label htmlFor="firstPh">your phone number</label>
            <Field type="text" id="firstPh" name="phoneNumber[0]" />
            <ErrorMessage name="phoneNumber" component="span" />
          </fieldset>
          <fieldset>
            <label htmlFor="secPh">dad phone number</label>
            <Field type="text" id="secPh" name="phoneNumber[1]" />
            <ErrorMessage name="phoneNumber" component="span" />
          </fieldset>
          <fieldset>
            <label>your childrens name</label>
            <FieldArray name="children">
              {({
                form: {
                  values: { children },
                },
                push,
                remove,
              }) =>
                children.map((child, index) => (
                  <React.Fragment key={index}>
                    <Field
                      type="text"
                      id={`children[${index}]`}
                      name={`children[${index}]`}
                    />
                    {children.length > 1 && (
                      <button type="button" onClick={() => remove(index)}>
                        -
                      </button>
                    )}
                    <button type="button" onClick={() => push("")}>
                      +
                    </button>
                  </React.Fragment>
                ))
              }
            </FieldArray>
          </fieldset>
          <button
            className={`header border text-sm md:text-base border-blue-400 text-blue-400 font-bold tracking-widest outline-none py-2
            w-full rounded-sm mt-7 disabled:opacity-50`}
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NewSignupForm;

const ErrorMsg = ({ children }) => {
  return <span style={{ color: "red" }}>{children}</span>;
};
