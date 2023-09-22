import React, { useContext } from 'react';
import styles from './TasksNotDone.module.scss';
import { TasksContext } from '../../../context';


const TasksNotDone = () => {
const {tasks} = useContext(TasksContext);  

  return (
    <>
        {tasks.map((task)=>{
          if(task.body === ''){
            return null;
          }
           if(task.isDone === false){
             return <li className={styles.taskMain} key={task.id}>{task.body}</li>
          }
        })}
     
  </>);
}

export default TasksNotDone;