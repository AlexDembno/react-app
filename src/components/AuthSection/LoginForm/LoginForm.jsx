import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  };

  return (
    <div className={styles.wrapperPage}>
      <h2 className={styles.text}>Login Form</h2>
      <div className={styles.container}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={validate}
          onSubmit={(values, formikBag) => {
            // dispatch();
            console.log({ values });

            formikBag.resetForm();
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.wrapperForm}>
              <label htmlFor={emailFieldId}>Email</label>
              <Field
                className={styles.input}
                name="email"
                maxLength={20}
                id={emailFieldId}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />

              <label htmlFor={passwordFieldId}>Password</label>
              <Field
                className={styles.input}
                name="password"
                maxLength={20}
                id={passwordFieldId}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />

              <button className={styles.button} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
