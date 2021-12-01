import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import backgroundImage from '../assets/img/new_passowrd.svg';

const NewPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className="login">
        <figure className="login__picture">
          <img className="login__img" src={backgroundImage} alt="contact img" />
        </figure>
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <h2 className="login__title">Put you new password</h2>
          <label className="login__text">
            Password
            <input
              type={passwordShown ? 'text' : 'password'}
              placeholder="********"
              className="login__input"
              {...register('contrasena', {
                required: true,
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener almenos 6 caracteres'
                }
              })}
            />
            <i onClick={togglePasswordVisiblity} className="bx bx-show login__password--show" />
          </label>
          {errors?.contrasena?.type === 'required' && (
            <p className="login__error">Este campo es requerido</p>
          )}
          {errors.contrasena?.message && (
            <p className="login__error">{errors.contrasena?.message}</p>
          )}

          <label className="login__text">
            Confirm password
            <input
              type={passwordShown ? 'text' : 'password'}
              placeholder="********"
              className="login__input"
              {...register('confirPassword', {
                required: true,
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener almenos 6 caracteres'
                }
              })}
            />
            <i onClick={togglePasswordVisiblity} className="bx bx-show login__password--show" />
          </label>
          {errors?.confirPassword?.type === 'required' && (
            <p className="login__error">Este campo es requerido</p>
          )}
          {errors.confirPassword?.message && (
            <p className="login__error">{errors.confirPassword?.message}</p>
          )}
          <button type="submit" className="login__cta">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default NewPassword;
