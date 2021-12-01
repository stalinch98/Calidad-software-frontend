import React from 'react';
import PropTypes from 'prop-types';

const OtherInfo = ({ formData, error, handleBlur, handleChange }) => {
  return (
    <>
      <label className="register__text">
        Date of Birth
        <input
          name="dateBirth"
          className="register__input"
          type="date"
          value={formData.dateBirth}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error.dateBirth && <p className="register__error">{error.dateBirth}</p>}
      </label>

      <label className="register__text">
        Gender
        <select
          name="gender"
          className="register__input"
          value={formData.gender}
          onBlur={handleBlur}
          onChange={handleChange}>
          <option name="genero" value="man">
            Man
          </option>
          <option name="genero" value="woman">
            Woman
          </option>
          <option name="genero" value="other">
            Other
          </option>
        </select>
        {error.gender && <p className="register__error">{error.gender}</p>}
      </label>

      <label className="register__text">
        Civil Status
        <select
          name="civilStatus"
          className="register__input"
          value={formData.civilStatus}
          onBlur={handleBlur}
          onChange={handleChange}>
          <option name="civilStatus" value="single">
            Single
          </option>
          <option name="civilStatus" value="married">
            Married
          </option>
          <option name="civilStatus" value="divorced">
            Divorced
          </option>
          <option name="civilStatus" value="widower">
            Widower
          </option>
        </select>
        {error.civilStatus && <p className="register__error">{error.civilStatus}</p>}
      </label>
      <label className="register__text">
        Postal Code
        <input
          name="postalCode"
          type="number"
          className="register__input"
          value={formData.postalCode}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {error.postalCode && <p className="register__error">{error.postalCode}</p>}
      </label>
      <label className="register__text">
        Blood Type
        <select
          name="bloodType"
          className="register__input"
          value={formData.bloodType}
          onBlur={handleBlur}
          onChange={handleChange}>
          <option name="tipoSangre" value="Type A+">
            Type A+
          </option>
          <option name="tipoSangre" value="Type A-">
            Type A-
          </option>
          <option name="tipoSangre" value="Type B+">
            Type B+
          </option>
          <option name="tipoSangre" value="Type B-">
            Type B-
          </option>
          <option name="tipoSangre" value="Type AB+">
            Type AB+
          </option>
          <option name="tipoSangre" value="Type AB-">
            Type AB-
          </option>
          <option name="tipoSangre" value="Type O+">
            Type O+
          </option>
          <option name="tipoSangre" value="Type O-">
            Type O-
          </option>
        </select>
        {error.bloodType && <p className="register__error">{error.bloodType}</p>}
      </label>
    </>
  );
};
OtherInfo.propTypes = {
  formData: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  error: PropTypes.object
};

export default OtherInfo;
