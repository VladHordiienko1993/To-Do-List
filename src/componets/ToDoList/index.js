import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styles from "./ToDoList.module.scss";
import { TasksContext, TasksFormContext } from "../../context";
import useCurrentLocation from "./../../hooks/useCurrentLocation";
import useToDo from "./../../hooks/useToDo";
import FormTasks from "./../FormTasks/index";
import TasksOptions from "./TasksOptions";
import TasksDone from "./TasksDone";
import TasksNotDone from "./TasksNotDone";
import TasksDeleted from "./TasksDeleted";

const ToDoList = (props) => {
  const { tasks, deletedTasks, addTask, clickDoneTask, clickDeleteTask, clickReturnTask } =
    useToDo([
      {
        id: Date.now(),
        body: "",
        isDone: false,
      },
    ]);

  const { pathname } = useLocation();
  const { showPath } = useCurrentLocation(pathname);

  return (
    <div className={styles.ToDo}>
      <h1 className={styles.heading}>Todo List</h1>
      <div className={styles.wrapperTable}>
        <TasksFormContext.Provider value={{ addTask, showPath }}>
          <FormTasks />
        </TasksFormContext.Provider>
        <TasksContext.Provider
          value={{ tasks, deletedTasks,  clickDoneTask, clickDeleteTask,clickReturnTask }}
        >
          <nav>
            <ul>
              <Routes>
                <Route path="/">
                  <Route index element={<TasksOptions />} />
                  <Route path="/Done" element={<TasksDone />} />
                  <Route path="/NotDone" element={<TasksNotDone />} />
                  <Route path="/DeletedTasks" element={<TasksDeleted />} />
                </Route>
              </Routes>
            </ul>
          </nav>
        </TasksContext.Provider>
      </div>
    </div>
  );
};
export default ToDoList;
