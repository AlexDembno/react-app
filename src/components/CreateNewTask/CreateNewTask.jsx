import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { addTask, editTask } from "../../redux/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./CreateNewTask.module.css";

const CreateNewTask = ({ name, closeModal, ListName, taskId }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const validate = (value) => {
    let errorMessage;
    if (!value) {
      errorMessage = "Required";
    }
    return errorMessage;
  };

  const formatDate = (date) => {
    // return format(date, "yyyy-MM-dd HH:mm:ss");
    return format(date, "yyyy-MM-dd");
  };

  return (
    <div className={styles.box}>
      <h2 className={styles.text}>{name}</h2>
      <div>
        <Formik
          initialValues={{
            name: "",
            status: ListName,
            description: "",
            priority: "",
            startDate: startDate,
          }}
          onSubmit={(values, formikBag) => {
            const formattedStartDate = formatDate(startDate);
            dispatch(
              name === "Create New Task"
                ? addTask({ ...values, startDate: formattedStartDate })
                : editTask({ taskId, ...values, startDate: formattedStartDate })
            );
            formikBag.resetForm();
            closeModal();
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.wrapperForm}>
              <label>
                Task name
                <Field
                  className={styles.input}
                  name="name"
                  validate={validate}
                  maxLength={20}
                  placeholder={errors && errors.name}
                />
              </label>

              <label>
                Task description
                <Field
                  className={styles.input}
                  name="description"
                  validate={validate}
                  maxLength={50}
                  placeholder={errors && errors.name}
                />
              </label>

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
                    validate={validate}
                  />
                  Low
                </label>
                <label>
                  <Field
                    type="radio"
                    name="priority"
                    value="Medium"
                    validate={validate}
                  />
                  Medium
                </label>
                <label>
                  <Field
                    type="radio"
                    name="priority"
                    value="High"
                    validate={validate}
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
