import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddTeachers({ detailsTeacher, addTeacher }) {
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [classHandling, setClassHandling] = useState('');

  useEffect(() => {
    if (params.id !== undefined) {
      setName(detailsTeacher[params.id]?.name || '');
      setAge(detailsTeacher[params.id]?.age || '');
      setClassHandling(detailsTeacher[params.id]?.classHandling || '');
    }
  }, [params.id, detailsTeacher]);

  const handleSubmit = () => {
    const newUser = { name, age, classHandling };

    if (params.id !== undefined) {
      const updateddetailsTeacher = detailsTeacher.map((user, index) => {
        if (index === Number(params.id)) {
          return newUser;
        }
        return user;
      });
      addTeacher(updateddetailsTeacher);
    } else {
      addTeacher([...detailsTeacher, newUser]);
    }

    navigate('/Teacher');
  };

  return (
    <div className="container-fluid">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGrade">
          <Form.Label>Class Handling</Form.Label>
          <Form.Control
            type="text"
            placeholder="class handling"
            value={classHandling}
            onChange={(e) => setClassHandling(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddTeachers;
