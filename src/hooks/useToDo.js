import { useState } from "react";

const useToDo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);
  const [deletedTasks, setDeletedTasks] = useState([]);

  return {
    deletedTasks,
    tasks,
    addTask: (value, formikBag) => {
      const newTask = {
        id: Date.now(),
        body: value.BODY,
        isDone: false,
      };
      formikBag.resetForm();
      setTasks([...tasks, newTask]);
    },
    clickDoneTask: (id) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { ...task, isDone: task.isDone ? false : true };
          }
          return task;
        })
      );
    },
    clickDeleteTask: (id) => {
    
      setTasks(
        tasks.map((task) => {
          if (id === task.id) {
            return setDeletedTasks([...deletedTasks, task]);
          }
        })
      );

      setTasks(tasks.filter((task) => task.id !== id));
    },
    clickReturnTask : (idTask,bodyTask)=>{
      const newTask = {
        id: idTask,
        body: bodyTask,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setDeletedTasks(deletedTasks.filter((task)=>task.id !== idTask));

    },
  };
};
export default useToDo;
