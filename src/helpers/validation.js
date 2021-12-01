export const validationsForm = (form) => {
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  let regexNumber = /^[0-9]+$/;

  let errors = {};
  /*File name validations*/
  if (!form.name.trim()) {
    errors.name = 'The field name is required';
  } else if (!regexName.test(form.name)) {
    errors.name = 'The field name must contain only letters';
  }

  /*Last name validations*/
  if (!form.lastName.trim()) {
    errors.lastName = 'The field last name is required';
  } else if (!regexName.test(form.lastName)) {
    errors.lastName = 'The field last name must contain only letters';
  }
  /*age validations*/
  if (!form.age) {
    errors.age = 'The field age is required';
  } else if (form.age < 18) {
    errors.age = 'Age must be greater than 18';
  } else if (form.age > 100) {
    errors.age = 'Age must be less than 100';
  }

  /*email validations*/
  if (!form.email.trim()) {
    errors.email = 'The field email is required';
  } else if (!regexEmail.test(form.email)) {
    errors.email = 'The field email must be a valid email';
  }

  /*password validations*/
  if (!form.password.trim()) {
    errors.password = 'The field password is required';
  } else if (!regexPassword.test(form.password)) {
    errors.password =
      'The field password must contain at least 8 characters, one uppercase, one lowercase and one number';
  } else if (form.password !== form.passwordConfirm) {
    errors.password = 'The field password and password confirmation must be the same';
  }

  /* passwordConfirm validations*/
  if (!form.passwordConfirm.trim()) {
    errors.passwordConfirm = 'The field password confirmation is required';
  } else if (!regexPassword.test(form.passwordConfirm)) {
    errors.passwordConfirm =
      'The field password confirmation must contain at least 8 characters, one uppercase, one lowercase and one number';
  } else if (form.password !== form.passwordConfirm) {
    errors.passwordConfirm = 'The field password and password confirmation must be the same';
  }
  /*ci validations*/
  if (!form.ci.trim()) {
    errors.ci = 'The field number of identity card is required';
  } else if (form.ci.length !== 10) {
    errors.ci = 'The field number of identity card must contain 10 characters';
  } else if (!regexNumber.test(form.ci)) {
    errors.ci = 'The field number of identity card must contain only numbers';
  }

  /*country validations*/
  if (!form.country.trim()) {
    errors.country = 'The field country is required';
  } else if (!regexName.test(form.country)) {
    errors.country = 'The field country must contain only letters';
  }

  /*state validations*/
  if (!form.state.trim()) {
    errors.state = 'The field state is required';
  } else if (!regexName.test(form.state)) {
    errors.state = 'The field state must contain only letters';
  }

  /*city validations*/
  if (!form.city.trim()) {
    errors.city = 'The field city is required';
  } else if (!regexName.test(form.city)) {
    errors.city = 'The field city must contain only letters';
  }

  /*address validations*/
  if (!form.address.trim()) {
    errors.address = 'The field address is required';
  }

  /*date of birth validations*/
  if (!form.dateBirth.trim()) {
    errors.dateBirth = 'The field date of birth is required';
  } else if (form.dateBirth > new Date()) {
    errors.dateBirth = 'The field date of birth must be less than today';
  }

  /*gender validations*/
  if (!form.gender.trim()) {
    errors.gender = 'The field gender is required';
  }

  /*civil status*/
  if (!form.civilStatus.trim()) {
    errors.civilStatus = 'The field civil status is required';
  }

  /*postal code*/
  if (!form.postalCode.trim()) {
    errors.postalCode = 'The field postal code is required';
  } else if (!regexNumber.test(form.postalCode)) {
    errors.ci = 'The field postal code must contain only numbers';
  }

  /*blood type*/
  if (!form.bloodType.trim()) {
    errors.bloodType = 'The field blood type is required';
  }

  return errors;
};
