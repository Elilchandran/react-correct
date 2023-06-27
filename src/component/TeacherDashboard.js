import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function TeacherDashboard({ detailsTeacher, addTeacher }) { // Updated component name
  const navigate = useNavigate();

  const handleDelete = (i) => {
    const newArray = [...detailsTeacher];
    newArray.splice(i, 1);
    addTeacher(newArray);
  };

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Teacher Dashboard</h1>
            <Button
              variant="primary"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Faculty List
            </Button>
          </div>

          <div className="container-fluid">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Class Handling</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {detailsTeacher.map((teacher, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.age}</td>
                    <td>{teacher.classHandling}</td> {/* Updated variable name */}
                    <td>
                      <Button variant="primary" onClick={() => navigate(`/edit-user/${i}`)}>
                        Edit
                      </Button>{' '}
                      <Button variant="danger" onClick={() => handleDelete(i)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div>
              <Button variant="primary" onClick={() => navigate('/AddTeachers')}>
                Add Teacher
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard; // Updated component name
