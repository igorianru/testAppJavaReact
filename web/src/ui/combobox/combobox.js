import React from 'react'
import {Form} from 'react-bootstrap';

const Combobox = (props) => (
  <Form.Group controlId="exampleForm.ControlSelect1">
    {props.label && <Form.Label>{props.label}</Form.Label>}

    <Form.Control as="select" onChange={props.handle}>
      <option value="1">List First</option>
      <option value="2">List Second</option>
      <option value="3">List Three</option>
    </Form.Control>
  </Form.Group>
);

export default Combobox
