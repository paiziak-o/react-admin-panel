import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AdminWrapper from '../AdminWrapper';
import Box from './Box';

interface Props {
  wrapperClass: string;
  children: ReactNode;
}

const Dashboard: React.FC = () => (
  <AdminWrapper wrapperClass="dashbord">
    <Container fluid>
      <Row>
        <Col className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
          </a>
        </Col>
      </Row>
      <Row>
        <Box icon="fas fa-calendar" title="EARNINGS (MONTHLY)" price="$40,000" />
        <Box icon="fas fa-dollar-sign" title="EARNINGS (ANNUAL)" price="$215,000" />
        <Box icon="fas fa-clipboard-list" title="TASKS" price="50" />
        <Box icon="fas fa-comments" title="PENDING REQUESTS" price="18" />
      </Row>
    </Container>
  </AdminWrapper>
);

export default Dashboard;
