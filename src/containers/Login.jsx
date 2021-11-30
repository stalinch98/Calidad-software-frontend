import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/componenets/Login.css';
import backgroundImage from './../assets/img/login_img.svg';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/confirm');
  };
  return (
    <section className="login">
      <figure className="login__picture">
        <img className="login__img" src={backgroundImage} alt="contact img" />
      </figure>
      <form onSubmit={handleSubmit(onSubmit)} className="login__form">
        <h2 className="login__title">Voice Authentication Login</h2>
        <label className="login__text">Email</label>
        <input
          placeholder="hello@example.com"
          className="login__input"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email invalido'
            }
          })}
        />
        {errors?.email?.type === 'required' && <p>Este campo es requerido</p>}
        {errors.email?.message && <p>{errors.email?.message}</p>}

        <label className="login__text">Password</label>
        <input
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
        {errors?.contrasena?.type === 'required' && <p>Este campo es requerido</p>}
        {errors.contrasena?.message && <p>{errors.contrasena?.message}</p>}
        <button type="submit" className="login__cta">
          Login
        </button>
        <section className="login__options">
          <p>
            New in our app? <Link to="/register">Sign up</Link>
          </p>
          <p>
            Forgot your password? <Link to="/register">Click here</Link>
          </p>
        </section>
      </form>
    </section>
  );
};

export default Login;
