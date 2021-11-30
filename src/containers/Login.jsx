import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../assets/styles/componenets/Login.css';

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
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

        <label>Contraseña</label>
        <input
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
        <input type="submit" />
        <div>
          <Link to="/register">Registrate</Link>
        </div>
      </form>
      <Footer />
    </section>
  );
};

export default Login;
