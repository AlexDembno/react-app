import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { addListTask } from "../../redux/taskList/taskListSlice";
import styles from "./CreateNewList.module.css";

const CreateNewList = ({ closeModal }) => {
  const dispatch = useDispatch();
  const validate = (value) => {
    let errorMessage;
    if (!value) {
      errorMessage = "Required";
    }
    return errorMessage;
  };
  return (
    <div className={styles.box}>
      <h2 className={styles.text}>Create New List</h2>
      <div>
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={(values, formikBag) => {
            dispatch(
              addListTask({
                ...values,
              })
            );
            formikBag.resetForm();
            closeModal();
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.wrapperForm}>
              <label>
                Name
                <Field
                  className={styles.input}
                  name="name"
                  validate={validate}
                />
                {errors.tasks && errors.list.name && (
                  <div className={styles.error}>{errors.list.name}</div>
                )}
              </label>

              <button className={styles.button} type="submit">
                Create
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateNewList;
