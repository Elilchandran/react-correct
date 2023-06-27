import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import StudentDashboard from './component/StudentDashboard';
import AddUser from './component/AddStudent';
import Profile from './component/Profile';
import ProfileDetails from "./component/ProfileDetails";
import PendingRequest from './component/PendingRequest';
import Task from './component/Task';
import ResetPassword from './component/ResetPassword';
import AddTeacher from './component/AddTeacher';
import Teacher from './component/TeacherDashboard';


function App() {
  const [users, setUsers] = useState([
    {
      name: 'Aparana',
      age: '16',
      Grade: '11'
    },
    {
      name: 'Bob',
      age: '18',
      Grade: '12'
    },
    {
      name: 'Charlie',
      age: '19',
      Grade: '12'
    }
  ]);

  const [detailsTeacher, addTeacher] = useState([
    {
      name: 'Veena',
      age: '30',
      handling: '11'
    },
    {
      name: 'Sofiya',
      age: '45',
      handling: '12'
    },
    {
      name: 'Darwin',
      age: '50',
      handling: '12'
    }
  ]);

  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<StudentDashboard users={users} setUsers={setUsers} />} />
          <Route path="/Teacher" element={<Teacher detailsTeacher={detailsTeacher} addTeacher={addTeacher} />} />
          <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/profile" element={<Profile />}>
            <Route path='details' element={<ProfileDetails/>}/>
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/pending-request" element={<PendingRequest />} />
          <Route path="/task" element={<Task />} />
          <Route path="/add-teacher"element={<AddTeacher detailsTeacher={detailsTeacher} addTeacher={addTeacher} />}
          /></Routes>
      </div>
    </Router>
  );
}

export default App;
