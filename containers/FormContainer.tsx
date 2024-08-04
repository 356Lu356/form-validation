"use client";
import InputGeneric from "@/components/InputGeneric/InputGeneric";
import PrefixPhoneGeneric from "@/components/PrefixPhoneGeneric/PrefixPhoneGeneric";
import useValidation from "@/hook/useValidation";
import React, { useEffect, useRef } from "react";
import UserValidationForm from "./validation/userValidationForm";

export default function FormContainer() {
  const {
    stateValues,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    handleOnFocus,
    saveStateValues,
  } = useValidation(UserValidationForm, submitForm);
  const {
    name,
    surname,
    email,
    phonePrefix,
    phone,
    password,
    confirmPassword,
  } = stateValues;

  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const STATE_INITIAL = {
      name: "",
      surname: "",
      email: "",
      phonePrefix: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
    saveStateValues(STATE_INITIAL);
  }, []);

  const prefixList = [
    { label: "spain", value: "+34" },
    { label: "france", value: "+33" },
    { label: "germany", value: "+49" },
    { label: "italy", value: "+39" },
    { label: "portugal", value: "+351" },
    { label: "united kingdom", value: "+44" },
  ];

  async function submitForm() {
    console.log("Formulario enviado");
  }

  const dangerName = errors.name ? "ring-1 ring-dangerColor" : "";
  const dangerSurname = errors.surname ? "ring-1 ring-dangerColor" : "";
  const dangerEmail = errors.email ? "ring-1 ring-dangerColor" : "";
  const dangerPhone = errors.phone ? "ring-1 ring-dangerColor" : "";
  const dangerPassword = errors.password ? "ring-1 ring-dangerColor" : "";
  const dangerConfirmPassword = errors.confirmPassword
    ? "ring-1 ring-dangerColor"
    : "";

  return (
    <section className="  px-0 gap-x-0 h-full">
      <div className="size-full flex gap-2 justify-center items-center  ">
        <div className="w-full h-full flex flex-col justify-between gap-5 px-7 py-7">
          <div className=" flex flex-col justify-between items-center gap-5">
            <div className="w-full ">
              <p className="text-3xl">Registro de acceso</p>
            </div>
            <form
              className="w-full flex flex-col gap-5"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="flex gap-5 w-full">
                <div className="w-full">
                  <InputGeneric
                    inputClassName={`${dangerName}`}
                    ref={nameInputRef}
                    label="Nombre*"
                    type={"text"}
                    name="name"
                    value={name}
                    onChange={handleChange}
                    onFocus={() => handleOnFocus("name")}
                    onBlur={handleBlur}
                  />
                  {errors.name && (
                    <p className="text-dangerColor text-xs mt-1">
                      *{errors.name}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <InputGeneric
                    inputClassName={`${dangerSurname}`}
                    ref={surnameInputRef}
                    label="Apellidos*"
                    type={"text"}
                    name="surname"
                    value={surname}
                    onChange={handleChange}
                    onFocus={() => handleOnFocus("surname")}
                    onBlur={handleBlur}
                  />

                  {errors.surname && (
                    <p className="text-dangerColor text-xs mt-1">
                      *{errors.surname}
                    </p>
                  )}
                </div>
              </div>
              <div className=" w-full">
                <InputGeneric
                  inputClassName={`${dangerEmail}`}
                  ref={emailInputRef}
                  label="Email*"
                  type={"email"}
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onFocus={() => handleOnFocus("email")}
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <p className="text-dangerColor text-xs mt-1">
                    *{errors.email}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full h-full">
                <div className="flex gap-3">
                  <div className="w-1/5">
                    <PrefixPhoneGeneric
                      labelText="Teléfono*"
                      placeholder="+34"
                      value={phonePrefix}
                      items={prefixList}
                      onChange={handleChange}
                      onFocus={() => handleOnFocus("phonePrefix")}
                      onBlur={handleBlur}
                    />
                    {errors.phonePrefix && (
                      <p className="text-dangerColor text-xs mt-1">
                        *{errors.phonePrefix}
                      </p>
                    )}
                  </div>
                  <div className="w-4/5">
                    <InputGeneric
                      inputClassName={`${dangerPhone}`}
                      ref={phoneInputRef}
                      className="pt-4"
                      placeholder="Teléfono"
                      label=""
                      type={"text"}
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      onFocus={() => handleOnFocus("phone")}
                      onBlur={handleBlur}
                    />
                    {errors.phone && (
                      <p className="text-dangerColor text-xs mt-1">
                        *{errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <InputGeneric
                  ref={passwordInputRef}
                  inputClassName={`${dangerPassword}`}
                  label="Contraseña*"
                  type={"text"}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => handleOnFocus("password")}
                />
                {errors.password && (
                  <p className="text-dangerColor text-xs">*{errors.password}</p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <InputGeneric
                  ref={confirmPasswordInputRef}
                  inputClassName={`${dangerConfirmPassword}`}
                  label="Repetir contraseña*"
                  type={"text"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => handleOnFocus("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-dangerColor text-xs">
                    *{errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className=" w-full">
                {/* {errors.name &&
                  errors.surname &&
                  errors.email &&
                  errors.phonePrefix &&
                  errors.phone &&
                  errors.position && (
                    <p className="text-red-500 text-xs mt-1">
                      *Todos los campos son obligatorios
                    </p>
                  )} */}

                <button
                  type="submit"
                  className="w-full bg-primaryColor text-secondaryColor p-2 rounded-md my-3"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
