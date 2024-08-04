export interface UserErrors {
  name: string | undefined;
  surname: string | undefined;
  email: string | undefined;
  phonePrefix: string | undefined;
  phone: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

export default function UserValidationForm(values: {
  name: string;
  surname: string;
  email: string;
  phonePrefix: string;
  phone: string;
  password: string;
  confirmPassword: string;
}): UserErrors {
  let errors: UserErrors = {
    name: "",
    surname: "",
    email: "",
    phonePrefix: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  //Validar el nombre del usuario
  if (!values.name) {
    errors.name = "El Nombre es Obligatorio";
  } else {
    errors.name = undefined;
  }

  //Validar el apellido del usuario
  if (!values.surname) {
    errors.surname = "El Apellido es Obligatorio";
  } else {
    errors.surname = undefined;
  }

  //Validar el email del usuario
  if (!values.email) {
    errors.email = "El Email es Obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El Email es Invalido";
  } else {
    errors.email = undefined;
  }

  //Validar el prefijo del telefono del usuario
  if (!values.phonePrefix) {
    errors.phonePrefix = "El prefijo es Obligatorio";
  } else {
    errors.phonePrefix = undefined;
  }

  //Validar el telefono del usuario
  if (!values.phone) {
    errors.phone = "El Teléfono es Obligatorio";
  } else {
    errors.phone = undefined;
  }

  // Validar la contraseña
  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 10) {
    errors.password = "La contraseña debe tener al menos 10 caracteres";
  } else if (values.password.length > 20) {
    errors.password = "La contraseña debe tener menos de 20 caracteres";
  } else if (/\s/.test(values.password)) {
    errors.password = "La contraseña no puede contener espacios en blanco";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password =
      "La contraseña debe contener al menos un caracter en mayúscula";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password =
      "La contraseña debe contener al menos un caracter en minúscula";
  } else if (!/\d/.test(values.password)) {
    errors.password =
      "La contraseña debe contener al menos un caracter numérico";
  } else {
    errors.password = undefined;
  }

  //Validar la confirmación de la contraseña
  if (!values.confirmPassword) {
    errors.confirmPassword = "La confirmación de la contraseña es Obligatorio";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  } else {
    errors.confirmPassword = undefined;
  }

  return errors;
}
