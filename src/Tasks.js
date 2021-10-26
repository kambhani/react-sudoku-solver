import React, { useState } from 'react';
import Task from './Task';

function Tasks() {
  const [tasks, setTasks] = useState([{title: 'Task Title 1', date: 'Task date', description: 'Task description', tags: '#task #tags', status: 'Not started'}, {title: 'Task Title 2', date: 'Task date', description: 'Task description', tags: '#task #tags', status: 'In progress'}, {title: 'Task Title 3', date: 'Task date', description: 'Task description', tags: '#task #tags', status: 'Completed'}]);
  const [currentTask, setCurrentTask] = useState({});

  function deleteTask(index) {
    setTasks(tasks.slice(0,index).concat(tasks.slice(index + 1)));
  }

  return (
    <div className="flex p-5 justify-around flex-row flex-wrap">
      {
        tasks.map((task, index) => (
          <Task
            Index={index}
            Title={task.title}
            Date={task.date}
            Description={task.description}
            Tags={task.tags}
            Status={task.status}
            DeleteTask={deleteTask}
          />
        ))
      }
    </div>
  );
}

export default Tasks;