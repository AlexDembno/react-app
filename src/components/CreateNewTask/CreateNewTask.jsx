import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { addTask } from "../../redux/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./CreateNewTask.module.css";

const CreateNewTask = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.box}>
      <h2 className={styles.text}>CreateNewTask</h2>
      <div>
        <Formik
          initialValues={{
            tasks: {
              name: "",
              description: "",
              startDate,
            },
          }}
          onSubmit={(values, formikBag) => {
            dispatch(addTask(values, startDate));
            formikBag.resetForm();
          }}
        >
          <Form className={styles.wrapperForm}>
            <Field className={styles.input} name="tasks.name" />
            <Field className={styles.input} name="tasks.description" />
            <div id="my-radio-group">Priority</div>
            <div
              className={styles.radio}
              role="group"
              aria-labelledby="my-radio-group"
            >
              <label>
                <Field type="radio" name="priority" value="Low" />
                Low
              </label>
              <label>
                <Field type="radio" name="priority" value="Medium" />
                Medium
              </label>
              <label>
                <Field type="radio" name="priority" value="High" />
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
        </Formik>
      </div>
    </div>
  );
};

export default CreateNewTask;
