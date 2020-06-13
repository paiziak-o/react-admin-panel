import React, { FC, useState } from 'react';
import { useRouteMatch } from "react-router";
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { url } from '#/constants';

const Sidebar: FC = () => {
  const [ isOpen, setOpen ] = useState(false);
  const router = useRouteMatch();
  console.log(router);
  const isActive = (path: string) => path === router.path ? 'active' : '';

  return (
    <Navbar expand="lg" className={`admin-sidebar bg-gradient-primary ${isOpen ? 'open' : ''}`}>
      <Nav.Item className={isActive(url.dashboard)}>
        <Nav.Link to={url.dashboard} as={Link}>
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </Nav.Link>
      </Nav.Item>
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
      <div className="text-center d-none d-md-inline">
        <i 
          className={`fas fa-angle-${isOpen ? 'left' : 'right'} toggle-sidebar rounded-circle border-0`}
          onClick={() => setOpen(isOpen ? false : true)}
        ></i>
      </div>
    </Navbar>
  );
}

export default Sidebar;
