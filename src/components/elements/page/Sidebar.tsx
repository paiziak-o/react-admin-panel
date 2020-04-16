import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';

const Sidebar: React.FunctionComponent = () => (
  <Navbar expand="lg" className="admin-sidebar bg-gradient-primary">
    <Nav.Item><Nav.Link>
      <i className="fas fa-fw fa-table" />
      <span>Products</span></Nav.Link></Nav.Item>
    <hr className="sidebar-divider d-none d-md-block" />
  </Navbar>
);

export default Sidebar;
