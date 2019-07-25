import React from 'react'
import {Container, Navbar, Form, Nav} from 'react-bootstrap';
import Search from "../Search";
import Combobox from "../combobox/combobox";

const Header = (props) => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="/">Test App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"/>

        <Form inline>
          <Combobox handle={props.handleCheckList} />
          <Search cssClass="float-left" onChange={props.handleSearch} value={props.searchString}/>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header
