import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button,
} from 'react-bootstrap';

const Sidebar: React.FunctionComponent = () => (
  <Navbar expand="lg" className="admin-sidebar bg-gradient-primary">
    <Nav.Item>
      <Nav.Link>
        <i className="fas fa-fw fa-table" />
        <span>Products</span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <i className="fas fa-fw fa-table" />
        <span>Categories</span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <i className="fas fa-fw fa-table" />
        <span>Orders</span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <i className="fas fa-fw fa-table" />
        <span>Users</span>
      </Nav.Link>
    </Nav.Item>
    <hr className="sidebar-divider d-none d-md-block" />
    <div className="text-center d-none d-md-inline rounded-circle border-0">
      <i className="fas fa-angle-right"></i>
    </div>
  </Navbar>
);

export default Sidebar;
