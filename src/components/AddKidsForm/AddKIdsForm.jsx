import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { fetchAddKids } from "../../redux/kids/kidsOperations";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./AddKidsForm.module.scss";

const AddKidsForm = () => {
  const dispatch = useDispatch();
  const firstNameFieldId = useId();
  const lastNameFieldId = useId();
  const passwordFieldId = useId();

  const validate = (values) => {
    const errors = {};

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

    return errors;
  };

  return (
    <div className={styles.wrapperPage}>
      <h2 className={styles.text}>Add Kids</h2>
      <div className={styles.container}>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            password: "",
          }}
          validate={validate}
          onSubmit={(values, formikBag) => {
            dispatch(fetchAddKids(values));
            console.log(values);

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

              <label htmlFor={lastNameFieldId}>Last name</label>
              <Field
                className={styles.input}
                name="last_name"
                maxLength={20}
                id={lastNameFieldId}
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

export default AddKidsForm;
