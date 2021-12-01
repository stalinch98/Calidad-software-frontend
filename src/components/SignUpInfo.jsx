import React from 'react';
import PropTypes from 'prop-types';

const SignUpInfo = ({ formData, error, handleBlur, handleChange }) => {
  return (
    <>
      <label className="register__text">
        Name
        <input
          name="name"
          type="text"
          className="register__input"
          value={formData.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error.name && <p className="register__error">{error.name}</p>}
      </label>

      <label className="register__text">
        Last name
        <input
          name="lastName"
          type="text"
          className="register__input"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.lastName && <p className="register__error">{error.lastName}</p>}
      </label>

      <label className="register__text">
        Age
        <input
          name="age"
          type="number"
          className="register__input"
          value={formData.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.age && <p className="register__error">{error.age}</p>}
      </label>

      <label className="register__text">
        Email
        <input
          name="email"
          type="email"
          className="register__input"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.email && <p className="register__error">{error.email}</p>}
      </label>

      <label className="register__text">
        Password
        <input
          name="password"
          type="password"
          className="register__input"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.password && <p className="register__error">{error.password}</p>}
      </label>

      <label className="register__text">
        Confirm password
        <input
          name="passwordConfirm"
          type="password"
          className="register__input"
          value={formData.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.passwordConfirm && <p className="register__error">{error.passwordConfirm}</p>}
      </label>
    </>
  );
};

SignUpInfo.propTypes = {
  formData: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  error: PropTypes.object
};

export default SignUpInfo;
