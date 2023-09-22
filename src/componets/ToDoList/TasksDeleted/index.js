import React, { useContext } from 'react';
import styles from './TasksDeleted.module.scss';
import { TasksContext } from '../../../context';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';


const TasksDeleted = () => {
const {deletedTasks, clickReturnTask} = useContext(TasksContext);  

  return (<>
    
        {deletedTasks.map((task)=>{
          
             return <li className={styles.taskMain} key={task.id}>{task.body} <button onClick={()=>clickReturnTask(task.id, task.body)} className={styles.wrapperBtnDone}>{<RestoreFromTrashIcon className={styles.btnDelete}/>}</button></li>
          
        })}
     
  </>);
}

export default TasksDeleted;