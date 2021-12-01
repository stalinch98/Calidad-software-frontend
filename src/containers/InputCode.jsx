import React from 'react';
import { useForm } from 'react-hook-form';

const InputCode = () => {
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
        <form onSubmit={handleSubmit(onSubmit)} className="forgot__form">
          <h2 className="forgot__title">Put your code here</h2>
          <label className="forgot__text">
            Code
            <input
              type="number"
              placeholder="XXXX"
              className="forgot__input"
              {...register('code', {
                required: true,
                pattern: {
                  value: /^[0-9]/,
                  message: 'Only numbers'
                }
              })}
            />
          </label>
          {errors?.code?.type === 'required' && (
            <p className="forgot__error">This field is required</p>
          )}
          {errors.code?.message && <p className="forgot__error">{errors.code?.message}</p>}

          <button type="submit" className="forgot__cta">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default InputCode;
