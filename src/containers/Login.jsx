import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/componenets/Login.css';
import backgroundImage from './../assets/img/login_img.svg';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const apiUrl = 'http://localhost:3002/api/user/login';

  const onSubmit = (data) => {
    axios
      .post(apiUrl, data)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data.status === 'ok') {
          delete data.password;
          const userCode = axios.post('http://localhost:3002/api/user/code', data);
          userCode
            .then((response) => response.data.hashedCode)
            .then((hashedCode) => {
              console.log(hashedCode);
              const userData = {
                hashedCode,
                userName: response.data.data.username
              };
              navigate(`/confirm/${JSON.stringify(userData)}`);
            });

          /*navigate('/confirm');*/
        } else if (response.data.data.status === 'error') {
          Swal.fire({
            title: 'Access Denied',
            text: 'Password or email is incorrect',
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/');
            }
          });
        }
      })
      .catch((error) => {
        if (error.message === 'Request failed with status code 404') {
          Swal.fire({
            title: 'Access Denied',
            text: 'Password or email is incorrect',
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/');
            }
          });
        }
      });
  };
  return (
    <section className="login">
      <figure className="login__picture">
        <img className="login__img" src={backgroundImage} alt="contact img" />
      </figure>
      <form onSubmit={handleSubmit(onSubmit)} className="login__form">
        <h2 className="login__title">Iniciar Sesión</h2>
        <label className="login__text">
          Correo Electrónico
          <input
            placeholder="juan@gmail.com"
            className="login__input"
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
          <p className="login__error">Este campo es requerido</p>
        )}
        {errors.email?.message && <p className="login__error">{errors.email?.message}</p>}

        <label className="login__text">
          Contraseña
          <input
            type={passwordShown ? 'text' : 'password'}
            placeholder="********"
            className="login__input"
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'La contraseña debe tener almenos 6 caracteres'
              }
            })}
          />
          <i onClick={togglePasswordVisiblity} className="bx bx-show login__password--show" />
        </label>
        {errors?.password?.type === 'required' && (
          <p className="login__error">Este campo es requerido</p>
        )}
        {errors.password?.message && <p className="login__error">{errors.password?.message}</p>}
        <button type="submit" className="login__cta">
          Login
        </button>
        <section className="login__options">
          <p>
            ¿Aun no tienes cuenta?{' '}
            <Link className="login__link" to="/register">
              Registrate
            </Link>
          </p>
          <p>
            ¿Olvidaste tu contraseña?{' '}
            <Link className="login__link" to="/forgot">
              Click aqui
            </Link>
          </p>
        </section>
      </form>
    </section>
  );
};

export default Login;
