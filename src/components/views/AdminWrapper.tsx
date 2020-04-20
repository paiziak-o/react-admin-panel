import React, { ReactNode } from 'react';
import { Container, } from 'react-bootstrap';

import Header from '../elements/page/Header';
import Sidebar from '../elements/page/Sidebar';
import Footer from '../elements/page/Footer';

interface Props {
  wrapperClass: string;
  children: ReactNode;
}

const AdminWrapper: React.FC<Props> = ({ children, wrapperClass }: Props) => (
  <div className={`wrapper ${wrapperClass}`}>
    <Header />
    <div className="content">
      <Sidebar />
      <Container fluid className="page-content">
        {children}
        <Footer />
      </Container>
    </div>
  </div>
);

export default AdminWrapper;
