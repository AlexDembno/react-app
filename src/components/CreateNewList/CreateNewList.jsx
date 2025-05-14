import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { fetchAddtaskList } from "../../redux/taskList/taskListOperations";
import styles from "./CreateNewList.module.scss";

const CreateNewList = ({ closeModal, childId }) => {
  console.log("child_id", childId);

  const dispatch = useDispatch();
  const nameFieldId = useId();
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
            task_list_name: "",
          }}
          onSubmit={(values, formikBag) => {
            dispatch(
              fetchAddtaskList({
                ...values,
                child_id: childId,
              })
            );
            formikBag.resetForm();
            closeModal();
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.wrapperForm}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field
                className={styles.input}
                name="task_list_name"
                validate={validate}
                maxLength={20}
                placeholder={errors && errors.name}
              />

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
