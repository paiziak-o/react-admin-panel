import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';


const Login = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={10} lg={12} md={9}>
          <div className="wrapper-login">
            <Row>
              <Col lg={6} className="col-lg-6 d-none d-lg-block login-image"></Col>
              <Col lg={6}>
                <div className="form-wrapper">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
