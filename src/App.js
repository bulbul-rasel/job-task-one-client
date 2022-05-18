import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Task from './component/Task';
import Login from './component/Login';
import RequireAuth from './component/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/home' element={<RequireAuth><Home /></RequireAuth>}></Route>
        <Route path='/task' element={<RequireAuth>
          <Task />
        </RequireAuth>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
