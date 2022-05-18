import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const handleTaskDelete = id => {

        const proceed = window.confirm('Are you sure for delete?')
        if (proceed) {
            console.log('Identify id', id);
            const url = `http://localhost:5000/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted');
                        const remaining = tasks.filter(task => task._id !== id);
                        setTasks(remaining);
                    }
                })
        }

    }
    return (
        <div className='container'>
            <h2>Total task: {tasks.length}</h2>
            {
                tasks.map(task => <div className='shadow-lg m-4 p-4 text-center'
                    key={task._id}>
                    <div className="card-body">
                        <h5 className="card-title">Task name: {task.name}</h5>
                        <p className="card-text">Task Description: {task.task}</p>
                    </div>
                    <button onClick={() => handleTaskDelete(task._id)}>❌</button>
                </div>)
            }
        </div>
    );
};

export default Task;