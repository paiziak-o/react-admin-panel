import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AuthWrapper from './AuthWrapper';

import { login } from '../../../actions';

import { url } from '../../../constants';

const Login: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');

  return (
    <AuthWrapper wrapperClass="login">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
      </div>
      <Form>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Enter Email" 
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Enter Passsword"
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group controlId="remember-me">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button
          variant="primary"
          className="btn-user btn-block"
          onClick={() => dispatch(login(email, password))}
        >
          Login
        </Button>
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
}

export default Login;
