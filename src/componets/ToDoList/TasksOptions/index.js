import React, { useContext } from "react";
import { TasksContext } from "../../../context";
import styles from "./TasksOptions.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

const TasksOptions = (props) => {
  const { tasks, clickDoneTask, clickDeleteTask } = useContext(TasksContext);
  return (
    <>
      {tasks.map((task) => {
        if (task.body === "") {
          return null;
        }
        return (
          <li className={styles.taskMain} key={task.id}>
            <h2 className={styles.taskBody}>{task.body}</h2>
            <div className={styles.wrapperBtns}>
              <button
                className={styles.wrapperBtnDone}
                key={task.id}
                onClick={() => clickDoneTask(task.id)}
              >
                {task.isDone ? (
                  <DoneAllIcon className={styles.btnDone} />
                ) : (
                  <RemoveDoneIcon className={styles.btnDone} />
                )}
              </button>
              <button
                className={styles.wrapperBtnDone}
                onClick={() => clickDeleteTask(task.id)}
              >
                <DeleteIcon className={styles.btnDelete} />
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default TasksOptions;
