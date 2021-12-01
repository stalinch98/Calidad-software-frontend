/* eslint-disable no-unused-vars */
import { useState } from 'react';

export const useFormValidation = (initialForm, validateForm) => {
  /*para los valores del formulario*/
  const [form, setForm] = useState(initialForm);
  /*para los errores del formulario,si el objeto no tiene valores , todo esta bien*/
  const [errors, setErrors] = useState({});
  /*variable loading para esperar que se cargue los datos*/
  const [loading, setLoading] = useState(false);
  /*variable para la respuesta del envio del formulario*/
  const [response, setResponse] = useState(null);

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
  const handleSubmit = (e) => {
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      setResponse(null);
      /*enviar los datos por axios*/
      console.log('Enviando datos');
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
