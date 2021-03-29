import React from 'react';
import T from 'prop-types';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import useForm from '../../../hooks/useForm';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {
  const [credentials, handleChange, handleSubmit] = useForm({
    email: '',
    password: '',
  });

  const handleFormSubmit = ev => {
    onSubmit(credentials);
  };

  const { email, password } = credentials;

  return (
    <form className="loginForm" onSubmit={handleSubmit(handleFormSubmit)}>
      <FormField
        type="text"
        name="email"
        label="phone, email or username"
        className="loginForm-field"
        value={email}
        // onChange={handleUsernameChange}
        onChange={handleChange}
        autofocus
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value={password}
        // onChange={handlePasswordChange}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={isLoading || !email || !password}
      >
        Log in
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
  isLoading: T.bool,
};

LoginForm.defaultProps = {
  isLoading: false,
};

export default LoginForm;
