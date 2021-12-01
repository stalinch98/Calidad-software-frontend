/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
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
  });

  /* use use Capital letter to use a function who call a html component*/
  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  /*  const onSubmit = (data) => {
    console.log(data);
    navigate('/');
  };*/

  return (
    <section className="register">
      <section className="register__progressbar">
        <div style={{ width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%' }} />
      </section>

      <div className="register__header">
        <h1 className="register__title">{formTitle[page]}</h1>
      </div>
      <form className="register__form">
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
          type="submit"
          className="register__cta"
          onClick={() => {
            if (page === formTitle.length - 1) {
              alert('Enviando');
              console.log(formData);
            } else {
              setPage((currenPage) => currenPage + 1);
            }
          }}>
          {page === formTitle.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </section>
  );
};

export default Register;
