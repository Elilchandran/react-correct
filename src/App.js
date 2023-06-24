import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";
import AddUser from "./Component/AddUser"
import Profile from './Component/Profile'
import PendingRequest from './Component/PendingRequest'
import Task from "./Component/Task";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ProfileDetails from "./Component/ProfileDetails";
import ResetPassword from "./Component/ResetPassword";
import React from "react";
import UserContextComponent from "./context/UserContextComponent"
import DashboardContextComponent from "./context/DashboardContextComponent";

function App() {
  return <>
  <BrowserRouter>
    <div id="wrapper">
        <Sidebar/>
        <Routes>
          <Route path="/dashboard" element={
            <DashboardContextComponent>
              <UserContextComponent>
                <Dashboard/>
              </UserContextComponent>
            </DashboardContextComponent>
            }/>
            
          <Route path="/add-user" element={
            <UserContextComponent>
              <AddUser/>
            </UserContextComponent>}/>
          <Route path="/edit-user/:id" element={
            <UserContextComponent>
              <AddUser/>
            </UserContextComponent>}/>
          <Route path="/profile" element={<Profile/>}>
              <Route path='details' element={<ProfileDetails/>}/>
              <Route path='reset-password' element={<ResetPassword/>}/>
          </Route>
          <Route path="/pending-request" element={<PendingRequest/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="*" element={<Navigate to='/dashboard'/>}/>
        </Routes>
    </div>
  </BrowserRouter>
  </>
}

export default App;