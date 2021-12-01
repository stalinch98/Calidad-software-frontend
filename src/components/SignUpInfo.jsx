import React from 'react';
import PropTypes from 'prop-types';

const SignUpInfo = ({ register, errors }) => {
  return (
    <>
      <label className="register__text">
        Nombre
        <input
          className="register__input"
          {...register('nombre', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          })}
        />
      </label>
      {errors?.nombre?.type === 'required' && <p>Este campo es requerido</p>}
      {errors?.nombre?.type === 'pattern' && <p>Solo se permiten caracteres alphabeticos</p>}
      <label className="register__text">
        Apellido
        <input
          className="register__input"
          {...register('apellido', { required: true, pattern: /^[A-Za-z]+$/i })}
        />
      </label>
      {errors?.apellido?.type === 'required' && <p>Este campo es requerido</p>}
      {errors?.apellido?.type === 'pattern' && <p>Solo se permiten caracteres alphabeticos</p>}
      <label className="register__text">
        Edad
        <input
          className="register__input"
          {...register('edad', { required: true, min: 18, pattern: /^[0-9]/ })}
        />
      </label>
      {errors?.edad?.type === 'required' && <p>Este campo es requerido</p>}
      {errors.edad && <p>Debes ser mayor de edad</p>}
      {errors?.edad?.type === 'pattern' && <p>Solo se permiten numeros</p>}
      <label className="register__text">
        Email
        <input
          className="register__input"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email invalido'
            }
          })}
        />
      </label>
      {errors?.email?.type === 'required' && <p>Este campo es requerido</p>}
      {errors.email?.message && <p>{errors.email?.message}</p>}
      <label className="register__text">
        Contraseña
        <input
          className="register__input"
          {...register('contrasena', {
            required: true,
            minLength: {
              value: 6,
              message: 'La contraseña debe tener almenos 6 caracteres'
            }
          })}
        />
      </label>
      {errors?.contrasena?.type === 'required' && <p>Este campo es requerido</p>}
      {errors.contrasena?.message && <p>{errors.contrasena?.message}</p>}
      <label className="register__text">
        Confirmar Contraseña
        <input
          className="register__input"
          {...register('contrasenaConfirm', {
            required: true,
            minLength: {
              value: 6,
              message: 'La contraseña debe tener almenos 6 caracteres'
            }
          })}
        />
      </label>
      {errors?.contrasenaConfirm?.type === 'required' && <p>Este campo es requerido</p>}
      {errors.contrasenaConfirm?.message && <p>{errors.contrasenaConfirm?.message}</p>}
    </>
  );
};

SignUpInfo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default SignUpInfo;
