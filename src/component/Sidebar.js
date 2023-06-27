import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </div>

      <hr className="sidebar-divider my-0" />

      <div className="sidebar-heading">STUDENT DETAILS</div>

      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Students Dashboard </span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/add-user" className="nav-link">
          <i className="fa-solid fa-user-plus"></i>
          <span>Add Student</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />


      <div className="sidebar-heading">TEACHER DETAILS</div>

      <li className="nav-item">
        <Link to="/Teacher" className="nav-link">
          <i className="fa-solid fa-chalkboard-teacher"></i>
          <span>Teacher Dashboard</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/add-teacher" className="nav-link">
          <i className="fa-solid fa-user-plus"></i>
          <span>Add Teacher</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
      
      <Link to='/profile'>
        <li className="nav-item">
        <div className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fa-solid fa-address-card"></i>
        <span>Profile</span>
        </div>
        </li>
      </Link>
    </ul>
  );
}

export default Sidebar;
