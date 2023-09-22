import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TasksFormContext } from "../../context";
import styles from './FormTasks.module.scss';
import CONSTANTS from "../../constants";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DropDownList from '../ToDoList/DropDownList';
import { SCHEMA } from './../../utils/Schemas/index';


const FormTasks = (props) => {

  const {INITIAL_VALUES} = CONSTANTS;
  const {addTask, showPath} = useContext(TasksFormContext);

  return <> <Formik validationSchema={SCHEMA} onSubmit={addTask} initialValues={INITIAL_VALUES}>
        {(formikProps) => {
          return (
            <Form className={styles.form}>
              <ErrorMessage className={styles.errField} name='BODY' component='em' />
              <Field className={styles.field} name='BODY' />
              <button className={styles.submitWrapper} type="submit">
                {<AddBoxIcon className={styles.submit} />}
              </button>
              <div className={styles.ShowPath}>{showPath}</div>
              <DropDownList />
            </Form>
          );
        }}
      </Formik>
  
  </>;
};

export default FormTasks;
