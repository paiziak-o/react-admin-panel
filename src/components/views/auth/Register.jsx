import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import AuthWrapper from './AuthWrapper';

import  { url }  from '../../../constants';

const Register = () => {
  return (
    <AuthWrapper wrapperClass="register">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
      </div>
      <Form>
        <Form.Group controlId="personal-info">
          <Row>
            <Col sm={6} className="mb-3 mb-sm-0">
              <Form.Control type="text" placeholder="Enter First Name" />
            </Col>
            <Col sm={6} className="mb-3 mb-sm-0">
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group controlId="password">
          <Row>
            <Col sm={6} className="mb-3 mb-sm-0">
              <Form.Control type="password" placeholder="Enter Passsword" />
            </Col>
            <Col sm={6} className="mb-3 mb-sm-0">
              <Form.Control type="password" placeholder="Repeat Password" />
            </Col>
          </Row>
        </Form.Group>
        <a href="/signup" className="btn btn-primary btn-user btn-block">Register Account</a>
      </Form>
      <hr />
      <div>
        <Link className="small" to={url.forgotPassword}>Forgot Password?</Link>
      </div>
      <div>
        <Link className="small" to={url.login}>Already have an account? Login!</Link>
      </div>
    </AuthWrapper>
  );
}

export default Register;
