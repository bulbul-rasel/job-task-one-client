import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();


        const name = event.target.name.value;
        const task = event.target.task.value;

        const tasks = { name, task };

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(tasks),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                event.target.reset()
                toast('Task Is Added')
                navigate('/task')
            })
    }
    return (
        <div className='container'>
            <h2 className='text-center'>Add Task</h2>
            <div className=' d-flex justify-content-center align-items-center'>

                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Enter Task name' required />
                    <br />
                    <textarea type="text" name='task' placeholder='Enter task Description' required />
                    <br />
                    <input type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default Home;