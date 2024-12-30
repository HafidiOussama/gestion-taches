import React from 'react';
import { motion } from 'framer-motion';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <TaskItem
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default TaskList;
