import { useId } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { fetchKidsLogin } from "../../../redux/kids/kidsOperations";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./KidsLoginForm.module.scss";

const KidsLoginForm = () => {
  const dispatch = useDispatch();
  const firstNameFieldId = useId();
  const passwordFieldId = useId();

  const validate = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "Required";
    } else if (values.first_name === "admin") {
      errors.first_name = "Nice try!";
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
      <h2 className={styles.text}>Kids Login Form</h2>
      <div className={styles.container}>
        <Formik
          initialValues={{
            first_name: "",
            password: "",
          }}
          validate={validate}
          onSubmit={(values, formikBag) => {
            dispatch(fetchKidsLogin(values));

            formikBag.resetForm();
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.wrapperForm}>
              <label htmlFor={firstNameFieldId}>First Name</label>
              <Field
                className={styles.input}
                name="first_name"
                maxLength={20}
                id={firstNameFieldId}
              />
              <ErrorMessage
                name="first_name"
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
              <Link to="/registration" className={styles.registration}>
                Registration Form
              </Link>
              <Link to="/login" className={styles.registration}>
                Login Form
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default KidsLoginForm;
