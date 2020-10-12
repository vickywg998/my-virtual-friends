import React from "react";
// import { Link } from "react-router-dom";
import {
  Navbar,
  NavLink,
  NavItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <NavItem className="mr-auto">
        <NavLink href="#home">Home</NavLink>
      </NavItem>
      <NavItem className="mr-auto">
        <NavLink href="signup">Sign Up</NavLink>
      </NavItem>
      <NavItem className="mr-auto">
        <NavLink href="aboutus">About Us</NavLink>
      </NavItem>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Nav;
