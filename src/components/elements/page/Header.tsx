import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';

import { logout } from '../../../actions';
import { url } from '../../../constants';


const Header: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  return(
    <Navbar expand="lg" className="admin-header">
      <Navbar.Brand href="/">MM-Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mr-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="header-search-btn">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href={url.dashboard}>
            <i className="fas fa-bell"></i>
            <span className="badge badge-danger badge-counter">3+</span>
          </Nav.Link>
          <Nav.Link href={url.dashboard}>
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger badge-counter">3+</span>
          </Nav.Link>
          <NavDropdown
            alignRight
            title={<>
              <span className="mr-2 d-none d-lg-inline text-gray-600 small" />
              <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/30x30" />
            </>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> 
              Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => dispatch(logout())}>
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
