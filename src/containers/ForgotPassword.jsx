import React from 'react';
import { useForm } from 'react-hook-form';
/*
import { useNavigate } from 'react-router-dom';
*/
import './../assets/styles/componenets/ForgotPassword.css';
import backgroundImage from '../assets/img/forgot_img.svg';

const ForgotPassword = () => {
  /*
  const navigate = useNavigate();
*/

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    /*
    navigate('/confirm');
*/
  };
  return (
    <>
      <section className="forgot">
        <figure className="forgot__picture">
          <img className="forgot__img" src={backgroundImage} alt="contact img" />
        </figure>
        <form onSubmit={handleSubmit(onSubmit)} className="forgot__form">
          <h2 className="forgot__title">Forgot your password?</h2>
          <label className="forgot__text">
            Email
            <input
              placeholder="hello@example.com"
              className="forgot__input"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email invalido'
                }
              })}
            />
          </label>
          {errors?.email?.type === 'required' && (
            <p className="forgot__error">Este campo es requerido</p>
          )}
          {errors.email?.message && <p className="forgot__error">{errors.email?.message}</p>}

          <button type="submit" className="forgot__cta">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default ForgotPassword;
