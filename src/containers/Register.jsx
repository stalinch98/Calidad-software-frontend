import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/componenets/Register.css';
import SignUpInfo from '../components/SignUpInfo';
import PersonalInfo from '../components/PeronalInfo';
import OtherInfo from '../components/OtherInfo';

const Register = () => {
  /*controll of step of the page*/
  const [page, setPage] = useState(0);

  const formTitle = ['Sign Up', 'Personal Information', 'Other Information'];
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  /* use use Capital letter to use a function who call a html component*/
  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo register={register} errors={errors} />;
    } else if (page === 1) {
      return <PersonalInfo register={register} errors={errors} />;
    } else if (page === 2) {
      return <OtherInfo register={register} errors={errors} />;
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    navigate('/');
  };

  return (
    <section className="register">
      <section className="register__progressbar" />

      <div className="register__header">
        <h1 className="register__title">{formTitle[page]}</h1>
      </div>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <section className="register__body">{PageDisplay()}</section>
      </form>

      <div className="register__footer">
        <button
          className="register__cta"
          disabled={page === 0}
          onClick={() => {
            setPage((currenPage) => currenPage - 1);
          }}>
          Prev
        </button>
        <button
          className="register__cta"
          disabled={page === formTitle.length - 1}
          onClick={() => {
            setPage((currenPage) => currenPage + 1);
          }}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Register;
