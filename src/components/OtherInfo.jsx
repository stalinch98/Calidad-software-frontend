import React from 'react';
import PropTypes from 'prop-types';

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <>
      <label className="register__text">
        Fecha de Nacimiento
        <input
          className="register__input"
          type="date"
          value={formData.dateBirth}
          onChange={(e) => {
            setFormData({ ...formData, dateBirth: e.target.value });
          }}
        />
      </label>
      <label className="register__text">
        Genero
        <select
          className="register__input"
          value={formData.gender}
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value });
          }}>
          <option name="genero" value="hombre">
            Hombre
          </option>
          <option name="genero" value="mujer">
            Mujer
          </option>
          <option name="genero" value="prefiero no decir">
            Prefiero no decir
          </option>
        </select>
      </label>
      <label className="register__text">
        Estado Civil
        <select
          className="register__input"
          value={formData.civilStatus}
          onChange={(e) => {
            setFormData({ ...formData, civilStatus: e.target.value });
          }}>
          <option name="estadoCivil" value="Soltero">
            Soltero
          </option>
          <option name="estadoCivil" value="Casado">
            Casado
          </option>

          <option name="estadoCivil" value="Divorciado">
            Divorciado
          </option>
          <option name="estadoCivil" value="Viudo">
            Viudo
          </option>
        </select>
      </label>
      <label className="register__text">
        Codigo Postal
        <input
          type="number"
          className="register__input"
          value={formData.postalCode}
          onChange={(e) => {
            setFormData({ ...formData, postalCode: e.target.value });
          }}
        />
      </label>
      <label className="register__text">
        Tipo de sangre
        <select
          className="register__input"
          value={formData.bloodType}
          onChange={(e) => {
            setFormData({ ...formData, bloodType: e.target.value });
          }}>
          <option name="tipoSangre" value="Tipo A+">
            Tipo A+
          </option>
          <option name="tipoSangre" value="Tipo A-">
            Tipo A-
          </option>
          <option name="tipoSangre" value="Tipo B+">
            Tipo B+
          </option>
          <option name="tipoSangre" value="Tipo B-">
            Tipo B-
          </option>
          <option name="tipoSangre" value="Tipo AB+">
            Tipo AB+
          </option>
          <option name="tipoSangre" value="Tipo AB-">
            Tipo AB-
          </option>
          <option name="tipoSangre" value="Tipo O+">
            Tipo O+
          </option>
          <option name="tipoSangre" value="Tipo O-">
            Tipo O-
          </option>
        </select>
      </label>
    </>
  );
};
OtherInfo.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
};

export default OtherInfo;
