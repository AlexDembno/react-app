import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { addTask } from "../../redux/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { modalIsClose } from "../../redux/modal/modalSlice";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./CreateNewTask.module.css";

const CreateNewTask = () => {
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
      <h2 className={styles.text}>CreateNewTask</h2>
      <div>
        <Formik
          initialValues={{
            tasks: {
              name: "",
              status: "",
              description: "",
              priority: "",
              startDate: startDate,
            },
          }}
          onSubmit={(values, formikBag) => {
            const formattedStartDate = formatDate(startDate);
            dispatch(
              addTask({
                ...values,
                tasks: { ...values.tasks, startDate: formattedStartDate },
              })
            );
            formikBag.resetForm();
            dispatch(modalIsClose(false));
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.wrapperForm}>
              <label>
                Task name
                <Field
                  className={styles.input}
                  name="tasks.name"
                  validate={validate}
                />
                {errors.tasks && errors.tasks.name && (
                  <div className={styles.error}>{errors.tasks.name}</div>
                )}
              </label>
              <div id="my-radio-group">Status</div>
              <div
                className={styles.radio}
                role="group"
                aria-labelledby="my-radio-group"
              >
                <label>
                  <Field
                    type="radio"
                    name="tasks.status"
                    value="ToDo"
                    validate={validate}
                  />
                  ToDo
                </label>
                <label>
                  <Field
                    type="radio"
                    name="tasks.status"
                    value="Planned"
                    validate={validate}
                  />
                  Plannen
                </label>
                <label>
                  <Field
                    type="radio"
                    name="tasks.status"
                    value="In progress"
                    validate={validate}
                  />
                  In progress
                </label>
                {errors.tasks && errors.tasks.name && (
                  <div className={styles.error}>{errors.tasks.name}</div>
                )}
                <label>
                  <Field
                    type="radio"
                    name="tasks.status"
                    value="Close"
                    validate={validate}
                  />
                  Close
                </label>
              </div>
              <label>
                Task description
                <Field
                  className={styles.input}
                  name="tasks.description"
                  validate={validate}
                />
                {errors.tasks && errors.tasks.description && (
                  <div className={styles.error}>{errors.tasks.description}</div>
                )}
              </label>

              <div id="my-radio-group">Priority</div>
              <div
                className={styles.radio}
                role="group"
                aria-labelledby="my-radio-group"
              >
                <label>
                  <Field type="radio" name="tasks.priority" value="Low" />
                  Low
                </label>
                <label>
                  <Field type="radio" name="tasks.priority" value="Medium" />
                  Medium
                </label>
                <label>
                  <Field type="radio" name="tasks.priority" value="High" />
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
