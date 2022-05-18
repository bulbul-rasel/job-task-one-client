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

        fetch(' https://thawing-dawn-86875.herokuapp.com/task', {
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
                toast.success('Task Is Added')
                navigate('/task')
            })
    }
    return (
        <div className='container'>
            <h2 className='text-center'>Add Task</h2>
            <form onSubmit={handleSubmit} className=' '>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Task Name</label>
                    <input type="text" name='name' class="form-control" id="exampleFormControlInput1" placeholder="Task name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Task Description</label>
                    <textarea name='task' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-success">Add Task</button>
            </form>
        </div>
    );
};

export default Home;