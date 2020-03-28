import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AuthWrapper = ({ children, wrapperClass }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={10} lg={12} md={9}>
          <div className="wrapper-auth">
            <Row>
              <Col lg={6} className={`col-lg-6 d-none d-lg-block ${wrapperClass}-image`}></Col>
              <Col lg={6}>
                <div className="form-wrapper p-5">
                  {children}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthWrapper;
