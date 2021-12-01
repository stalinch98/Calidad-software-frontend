import React from 'react';
import PropTypes from 'prop-types';

const OtherInfo = ({ register, errors }) => {
  return (
    <>
      <label className="register__text">
        Fecha de Nacimiento
        <input
          className="register__input"
          {...register('fechaNacimiento', {
            required: true
          })}
          type="date"
        />
      </label>
      {errors?.fechaNacimiento?.type === 'required' && <p>Este campo es requerido</p>}
      <label className="register__text">
        Genero
        <select className="register__input">
          <option {...register('genero')} name="genero" value="hombre">
            Hombre
          </option>
          <option {...register('genero')} name="genero" value="mujer">
            Mujer
          </option>
          <option {...register('genero')} name="genero" value="prefiero no decir">
            Prefiero no decir
          </option>
        </select>
      </label>
      <label className="register__text">
        Estado Civil
        <select className="register__input">
          <option {...register('estadoCivil')} name="estadoCivil" value="Soltero">
            Soltero
          </option>
          <option {...register('estadoCivil')} name="estadoCivil" value="Casado">
            Casado
          </option>

          <option {...register('estadoCivil')} name="estadoCivil" value="Divorciado">
            Divorciado
          </option>
          <option {...register('estadoCivil')} name="estadoCivil" value="viudo">
            Viudo
          </option>
        </select>
      </label>
      <label className="register__text">
        Codigo Postal
        <input
          className="register__input"
          {...register('codigoPostal', {
            required: true,
            minLength: {
              value: 6,
              message: 'Solo se permiten numeros y el codigo postal debe tener 6 digitos'
            },
            pattern: /^[0-9]/
          })}
        />
      </label>
      {errors?.codigoPostal?.type === 'required' && <p>Este campo es requerido</p>}
      {errors.codigoPostal?.message && <p>{errors.codigoPostal?.message}</p>}
      <label className="register__text">
        Tipo de sangre
        <select className="register__input">
          <option {...register('tipoSangre')} name="tipoSangre" value="Tipo A+">
            Tipo A+
          </option>
          <option {...register('tipoSangre')} name="tipoSangre" value="Tipo A-">
            Tipo A-
          </option>
          <option {...register('tipoSangre')} name="tipoSangre" value="Tipo B+">
            Tipo B+
          </option>
          <option {...register('tipoSangre')} name="tipoSangre" value="Tipo B-">
            Tipo B-
          </option>
          <option {...register('tipoSangre')} name="tipoSangre" value="Tipo AB+">
            Tipo AB+
          </option>
          <option {...register('tipoSangre')} name="tipoSangre" value="Tipo AB-">
            Tipo AB-
          </option>
          <option {...register('tipoSangre')} name="tipoSangre" value="Tipo O+">
            Tipo O+
          </option>
          <option {...register('tipoSangre')} name="tipoSangre" value="Tipo O-">
            Tipo O-
          </option>
        </select>
      </label>
    </>
  );
};
OtherInfo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default OtherInfo;
