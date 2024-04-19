import React, { useState, useId } from "react";
import { Formik, Form, Field } from "formik";
import { addTask, editTask } from "../../redux/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./CreateNewTask.module.scss";

const CreateNewTask = ({ actionName, closeModal, ListName, taskId }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState("");
  const nameFieldId = useId();
  const msgFieldId = useId();

  const validate = (value) => {
    let errorMessage;
    if (!value) {
      errorMessage = "Required";
    }
    return errorMessage;
  };

  const formatDate = (date) => {
    if (!date) {
      return "";
    }
    return format(date, "dd-MM-yyyy");
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.text}>{actionName}</h2>
      <div>
        <Formik
          initialValues={{
            name: "",
            status: ListName,
            description: "",
            priority: "",
            startDate: startDate || "",
          }}
          onSubmit={(values, formikBag) => {
            const formattedStartDate = formatDate(startDate);
            dispatch(
              actionName === "Create New Task"
                ? addTask({ ...values, startDate: formattedStartDate || "" })
                : editTask({
                    taskId,
                    ...values,
                    startDate: formattedStartDate || "",
                  })
            );
            formikBag.resetForm();
            closeModal();
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.wrapperForm}>
              <label htmlFor={nameFieldId}>Task name</label>
              <Field
                className={styles.input}
                name="name"
                validate={
                  actionName === "Create New Task" ? validate : undefined
                }
                maxLength={20}
                placeholder={errors && errors.name}
                id={nameFieldId}
              />
              <label htmlFor={msgFieldId}>Task description</label>
              <Field
                className={styles.input}
                as="textarea"
                name="description"
                id={msgFieldId}
                rows="4"
                validate={
                  actionName === "Create New Task" ? validate : undefined
                }
                maxLength={150}
                placeholder={errors && errors.name}
              />

              <div className={styles.radio} id="my-radio-group">
                Priority
              </div>
              {errors && errors.priority && (
                <div className={styles.error}>{errors.priority}</div>
              )}
              <div
                className={styles.radio}
                role="group"
                aria-labelledby="my-radio-group"
              >
                <label>
                  <Field
                    type="radio"
                    name="priority"
                    value="Low"
                    validate={
                      actionName === "Create New Task" ? validate : undefined
                    }
                  />
                  Low
                </label>
                <label>
                  <Field
                    type="radio"
                    name="priority"
                    value="Medium"
                    validate={
                      actionName === "Create New Task" ? validate : undefined
                    }
                  />
                  Medium
                </label>
                <label>
                  <Field
                    type="radio"
                    name="priority"
                    value="High"
                    validate={
                      actionName === "Create New Task" ? validate : undefined
                    }
                  />
                  High
                </label>
              </div>
              <DatePicker
                className={styles.date}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
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

export default CreateNewTask;
