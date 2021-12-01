import React from 'react';
import PropTypes from 'prop-types';

const SignUpInfo = ({ formData, setFormData }) => {
  return (
    <>
      <label className="register__text">
        Nombre
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          className="register__input"
        />
      </label>

      <label className="register__text">
        Apellido
        <input
          type="text"
          className="register__input"
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
      </label>

      <label className="register__text">
        Edad
        <input
          type="number"
          className="register__input"
          value={formData.age}
          onChange={(e) => {
            setFormData({ ...formData, age: e.target.value });
          }}
        />
      </label>

      <label className="register__text">
        Email
        <input
          type="email"
          className="register__input"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
      </label>

      <label className="register__text">
        Contraseña
        <input
          type="password"
          className="register__input"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
      </label>

      <label className="register__text">
        Confirmar Contraseña
        <input
          type="password"
          className="register__input"
          value={formData.confirmPassword}
          onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
          }}
        />
      </label>
    </>
  );
};

SignUpInfo.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
};

export default SignUpInfo;
