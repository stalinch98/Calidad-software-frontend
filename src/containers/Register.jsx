/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../assets/styles/componenets/Register.css';
import SignUpInfo from '../components/SignUpInfo';
import PersonalInfo from '../components/PeronalInfo';
import OtherInfo from '../components/OtherInfo';
import { useFormValidation } from '../hooks/useFormValidation';
import { validationsForm } from '../helpers/validation';

const initialForm = {
  name: '',
  lastName: '',
  age: '',
  email: '',
  password: '',
  passwordConfirm: '',
  ci: '',
  country: '',
  state: '',
  city: '',
  address: '',
  dateBirth: '',
  gender: '',
  civilStatus: '',
  postalCode: '',
  bloodType: ''
};

const Register = () => {
  /*controll of step of the page*/
  const [page, setPage] = useState(0);
  const formTitle = ['Sign Up', 'Personal Information', 'Other Information'];

  /*validacion del formulario*/
  const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } =
    useFormValidation(initialForm, validationsForm);

  /* use use Capital letter to use a function who call a html component*/
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpInfo
          formData={form}
          error={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    } else if (page === 1) {
      return (
        <PersonalInfo
          formData={form}
          error={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    } else if (page === 2) {
      return (
        <OtherInfo
          formData={form}
          error={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    }
  };

  return (
    <section className="register">
      <section className="register__progressbar">
        <div style={{ width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%' }} />
      </section>
      <div className="register__header">
        <h1 className="register__title">{formTitle[page]}</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="register__form">
          <section className="register__body">{PageDisplay()}</section>
        </div>
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
            type="submit"
            className="register__cta"
            onClick={() => {
              if (page === formTitle.length - 1) {
                handleSubmit();
              } else {
                setPage((currenPage) => currenPage + 1);
              }
            }}>
            {page === formTitle.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
