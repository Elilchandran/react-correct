import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function StudentDashboard({ users, setUsers }) {
  const data = [
    {
      title: 'Fee Paid',
      value: '5000',
      color: 'primary',
      icon: 'fa-dollar-sign',
      isProgress: false
    },
    {
      title: 'credits earned',
      value: '60000',
      color: 'success',
      icon: 'fa-calendar',
      isProgress: false
    },
    {
      title: 'Task',
      value: '90',
      color: 'info',
      icon: 'fa-clipboard-list',
      isProgress: true
    },
    {
      title: 'Pending class',
      value: '18',
      color: 'warning',
      icon: 'fa-comments',
      isProgress: false
    }
  ];

  const navigate = useNavigate();

  const handleDelete = (i) => {
    const newArray = [...users];
    newArray.splice(i, 1);
    setUsers(newArray);
  };

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Student Dashboard</h1>
            <Button
              variant="primary"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Students Portfolio
            </Button>
          </div>

          <div className="row">
            {data.map((e, i) => {
              return <Card key={i} input={e} value={10} />;
            })}
          </div>

          <div className="container-fluid">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Grade</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{e.name}</td>
                      <td>{e.age}</td>
                      <td>{e.Grade}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => navigate(`/edit-user/${i}`)}
                        >
                          Edit
                        </Button>
                        {' '}
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(i)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                    
                  );
                })}
              </tbody>
            </Table>
            <div>
            <Button variant="primary" onClick={() => navigate('/add-user')}>
             Add student
           </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
