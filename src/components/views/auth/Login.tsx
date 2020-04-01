import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AuthWrapper from './AuthWrapper';

import { url } from '../../../constants';

const Login: React.FunctionComponent = () => (
  <AuthWrapper wrapperClass="login">
    <div className="text-center">
      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
    </div>
    <Form>
      <Form.Group controlId="email">
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Control type="password" placeholder="Enter Passsword" />
      </Form.Group>
      <Form.Group controlId="remember-me">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <a href="/link" className="btn btn-primary btn-user btn-block">
        Login
      </a>
    </Form>
    <hr />
    <div>
      <Link className="small" to={url.forgotPassword}>Forgot Password?</Link>
    </div>
    <div>
      <Link className="small" to={url.signup}>Create an Account!</Link>
    </div>
  </AuthWrapper>
);

export default Login;
