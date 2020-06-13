import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AuthWrapper from './AuthWrapper';

import { url } from '#/constants';

const ForgotPassword: React.FunctionComponent = () => (
  <AuthWrapper wrapperClass="forgot-password">
    <div className="text-center">
      <h1 className="h4 text-gray-900 mb-4">Forgot Your Password?</h1>
      <p className="mb-4">We get it, stuff happens. Just enter your email address below and we&apos;ll send you a link to reset your password!</p>
    </div>
    <Form>
      <Form.Group controlId="email">
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <a href="/link" className="btn btn-primary btn-user btn-block">Reset Password</a>
    </Form>
    <hr />
    <div>
      <Link className="small" to={url.signup}>Create an Account!</Link>
    </div>
    <div>
      <Link className="small" to={url.login}>Already have an account? Login!</Link>
    </div>
  </AuthWrapper>
);

export default ForgotPassword;
