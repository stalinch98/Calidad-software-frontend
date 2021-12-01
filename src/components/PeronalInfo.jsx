import React from 'react';
import PropTypes from 'prop-types';

const PeronalInfo = ({ formData, error, handleBlur, handleChange }) => {
  return (
    <>
      <label className="register__text">
        Number of identity card
        <input
          name="ci"
          type="number"
          className="register__input"
          value={formData.ci}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error.ci && <p className="register__error">{error.ci}</p>}
      </label>

      <label className="register__text">
        Country
        <input
          name="country"
          className="register__input"
          value={formData.country}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error.country && <p className="register__error">{error.country}</p>}
      </label>

      <label className="register__text">
        State
        <input
          name="state"
          className="register__input"
          value={formData.state}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error.state && <p className="register__error">{error.state}</p>}
      </label>

      <label className="register__text">
        City
        <input
          name="city"
          className="register__input"
          value={formData.city}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error.city && <p className="register__error">{error.city}</p>}
      </label>

      <label className="register__text">
        Address
        <input
          name="address"
          className="register__input"
          value={formData.address}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error.address && <p className="register__error">{error.address}</p>}
      </label>
    </>
  );
};

PeronalInfo.propTypes = {
  formData: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  error: PropTypes.object
};
export default PeronalInfo;
