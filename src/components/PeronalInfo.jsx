import React from 'react';
import PropTypes from 'prop-types';

const PeronalInfo = ({ register, errors }) => {
  return (
    <>
      <label className="register__text">
        Cedula
        <input
          className="register__input"
          {...register('cedula', {
            required: true,
            minLength: {
              value: 10,
              message: 'Solo se permiten numeros y la cedula de identidad debe tener 10 caracteres'
            },
            pattern: /^[0-9]/
          })}
        />
      </label>
      {errors?.cedula?.type === 'required' && <p>Este campo es requerido</p>}
      {errors.cedula?.message && <p>{errors.cedula?.message}</p>}
      <label className="register__text">
        Pais
        <input
          className="register__input"
          {...register('pais', {
            required: true,
            maxLength: 100,
            pattern: /^[A-Za-z]+$/i
          })}
        />
      </label>
      {errors?.pais?.type === 'required' && <p>Este campo es requerido</p>}
      {errors?.pais?.type === 'pattern' && <p>Solo se permiten caracteres alphabeticos</p>}
      <label className="register__text">
        Provincia
        <input
          className="register__input"
          {...register('provincia', {
            required: true,
            maxLength: 100,
            pattern: /^[A-Za-z]+$/i
          })}
        />
      </label>
      {errors?.provincia?.type === 'required' && <p>Este campo es requerido</p>}
      {errors?.provincia?.type === 'pattern' && <p>Solo se permiten caracteres alphabeticos</p>}
      <label className="register__text">
        Ciudad
        <input
          className="register__input"
          {...register('ciudad', {
            required: true,
            maxLength: 100,
            pattern: /^[A-Za-z]+$/i
          })}
        />
      </label>
      {errors?.ciudad?.type === 'required' && <p>Este campo es requerido</p>}
      {errors?.ciudad?.type === 'pattern' && <p>Solo se permiten caracteres alphabeticos</p>}
      <label className="register__text">
        Direccion
        <input
          className="register__input"
          {...register('direccion', {
            required: true,
            maxLength: 200,
            pattern: /^[A-Za-z]+$/i
          })}
        />
      </label>
      {errors?.direccion?.type === 'required' && <p>Este campo es requerido</p>}
      {errors?.direccion?.type === 'pattern' && <p>Solo se permiten caracteres alphabeticos</p>}
    </>
  );
};

PeronalInfo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object
};
export default PeronalInfo;
