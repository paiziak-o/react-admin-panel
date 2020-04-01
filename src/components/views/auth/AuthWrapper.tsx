import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface Props {
  wrapperClass: string;
  children: ReactNode;
}

const AuthWrapper: React.FC<Props> = ({ children, wrapperClass }: Props) => (
  <Container>
    <Row className="justify-content-center">
      <Col xl={10} lg={12} md={9}>
        <div className="wrapper-auth">
          <Row>
            <Col lg={6} className={`col-lg-6 d-none d-lg-block ${wrapperClass}-image`} />
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

export default AuthWrapper;
