import React, { useContext } from 'react';
import { TasksContext } from '../../../context';
import styles from './TasksDone.module.scss';
const TasksDone = () => {
const {tasks} = useContext(TasksContext);  

  return (<>
    
        {tasks.map((task)=>{
          if(task.isDone === true){
             return <li className={styles.taskMain} key={task.id}>{task.body}</li>
          }
        })}
     
  </>);
}

export default TasksDone;
