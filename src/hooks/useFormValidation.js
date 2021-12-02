/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const useFormValidation = (initialForm, validateForm) => {
  /*para los valores del formulario*/
  const [form, setForm] = useState(initialForm);
  /*para los errores del formulario,si el objeto no tiene valores , todo esta bien*/
  const [errors, setErrors] = useState({});
  /*variable loading para esperar que se cargue los datos*/
  const [loading, setLoading] = useState(false);
  /*variable para la respuesta del envio del formulario*/
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const apiUrl = 'http://localhost:3002/api/user/';

  /*acciones que realizara el formulario*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    /*para guardar la data*/
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = () => {
    setErrors(validateForm(form));
    console.log(form);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      setResponse(null);
      /*enviar los datos por axios*/
      axios
        .post(apiUrl, form)
        .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              title: 'Register Success',
              text: 'Welcome to our community',
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Go to login'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/');
              }
            });
          }
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    } else {
      console.log('Error en el formulario');
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  };
};
