import { useId } from "react";
import { Formik, Form, Field } from "formik";
// import {
//   fetchAddTasks,
//   fetchEditTask,
// } from "../../redux/tasks/tasksOperations";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./RegisterForm.module.scss";

const RegisterForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const firstNameFieldId = useId();
  const lastNameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const validate = (
    values,
    props /* only available when using withFormik */
  ) => {
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

    if (!values.first_name) {
      errors.first_name = "Required";
    } else if (values.first_name === "admin") {
      errors.first_name = "Nice try!";
    }
    //...

    return errors;
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.text}>{}</h2>
      <div>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          onSubmit={(values, formikBag) => {
            // dispatch();
            console.log({ values });

            formikBag.resetForm();
            closeModal();
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.wrapperForm}>
              <label htmlFor={firstNameFieldId}>First name</label>
              <Field
                className={styles.input}
                name="first_name"
                validate={validate}
                maxLength={20}
                placeholder={errors && errors.first_name.first_name}
                id={firstNameFieldId}
              />
              <label htmlFor={lastNameFieldId}>Last name</label>
              <Field
                className={styles.input}
                name="last_name"
                validate
                maxLength={20}
                placeholder
                id={lastNameFieldId}
              />
              <label htmlFor={emailFieldId}>Email</label>
              <Field
                className={styles.input}
                name="email"
                validate={validate}
                maxLength={20}
                placeholder={errors && errors.email.email}
                id={emailFieldId}
              />
              <label htmlFor={passwordFieldId}>Password</label>
              <Field
                className={styles.input}
                name="password"
                validate={validate}
                maxLength={20}
                placeholder={errors && errors.password.password}
                id={passwordFieldId}
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

export default RegisterForm;
