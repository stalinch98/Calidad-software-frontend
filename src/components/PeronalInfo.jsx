import React from 'react';
import PropTypes from 'prop-types';

const PeronalInfo = ({ formData, setFormData }) => {
  return (
    <>
      <label className="register__text">
        Cedula
        <input
          type="number"
          className="register__input"
          value={formData.ci}
          onChange={(e) => {
            setFormData({ ...formData, ci: e.target.value });
          }}
        />
      </label>

      <label className="register__text">
        Pais
        <input
          className="register__input"
          value={formData.country}
          onChange={(e) => {
            setFormData({ ...formData, country: e.target.value });
          }}
        />
      </label>

      <label className="register__text">
        Provincia
        <input
          className="register__input"
          value={formData.state}
          onChange={(e) => {
            setFormData({ ...formData, state: e.target.value });
          }}
        />
      </label>

      <label className="register__text">
        Ciudad
        <input
          className="register__input"
          value={formData.city}
          onChange={(e) => {
            setFormData({ ...formData, city: e.target.value });
          }}
        />
      </label>

      <label className="register__text">
        Direccion
        <input
          className="register__input"
          value={formData.address}
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
          }}
        />
      </label>
    </>
  );
};

PeronalInfo.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
};
export default PeronalInfo;
