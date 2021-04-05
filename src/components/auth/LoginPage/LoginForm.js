import React from 'react';
import T from 'prop-types';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import useForm from '../../../hooks/useForm';

import './LoginForm.css';
import CheckField from '../../shared/CheckField';

function LoginForm({ onSubmit, isLoading }) {
  const [credentials, handleChange, handleSubmit] = useForm({
    email: '',
    password: '',
    check: false,
  });

  const handleFormSubmit = ev => {
    onSubmit(credentials);
  };

  const { email, password, check } = credentials;
  return (
    <form className="loginForm" onSubmit={handleSubmit(handleFormSubmit)}>
      <FormField
        type="text"
        name="email"
        label="Username"
        className="loginForm-field"
        value={email}
        onChange={handleChange}
        autofocus
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value={password}
        onChange={handleChange}
      />
      <CheckField
          type="checkbox"
          name="check"
          label="Save session "
          className="Checkbox"
          checked={check}
          onChange={handleChange}>
      </CheckField>
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
