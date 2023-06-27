import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddUser({ users, setUsers }) {
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [Grade, setGrade] = useState('');

  useEffect(() => {
    if (params.id !== undefined) {
      setName(users[params.id]?.name || '');
      setAge(users[params.id]?.age || '');
      setGrade(users[params.id]?.Grade || '');
    }
  }, [params.id, users]);

  const handleSubmit = () => {
    const newUser = { name, age, Grade };

    if (params.id !== undefined) {
      const updatedUsers = users.map((user, index) => {
        if (index === Number(params.id)) {
          return newUser;
        }
        return user;
      });
      setUsers(updatedUsers);
    } else {
      setUsers([...users, newUser]);
    }

    navigate('/dashboard');
  };

  return (
    <div className="container-fluid">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter grade"
            value={Grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;
