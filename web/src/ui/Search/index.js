import React from 'react'
import {Form} from 'react-bootstrap';

const Search = (props) => (
  <Form.Control
    className={props.cssClass}
    type="text"
    onChange={props.onChange}
    value={props.value}
    placeholder="Enter Task name.."
    autoFocus
  />
);

export default Search
