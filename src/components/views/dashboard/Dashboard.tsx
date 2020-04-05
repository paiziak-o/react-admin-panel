import React, { ReactNode } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

import AdminWrapper from '../AdminWrapper';
interface Props {
  wrapperClass: string;
  children: ReactNode;
}

const Dashboard: React.FC<Props> = ({ children, wrapperClass }: Props) => (
  <AdminWrapper wrapperClass="dashbord">
    wrapper
  </AdminWrapper>
);

export default Dashboard;
