"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface UseValidation<T, K> {
  stateValues: T;
  errors: K;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleBlur: () => void;
  handleOnFocus: (field: string) => void;
  saveStateValues: (valores: T) => void;
}

const useValidation = <T, K extends Object>(
  validate: (stateValues: T) => K,
  fn: () => void
): UseValidation<T, K> => {
  const stateValuesInit = {} as T;
  const errorsInit = {} as K;
  const [stateValues, saveStateValues] = useState<T>(stateValuesInit);
  const [errors, saveErrors] = useState<K>(errorsInit);
  const [submitForm, saveSubmitForm] = useState<boolean>(false);

  useEffect(() => {
    saveStateValues({ ...stateValues } as T);
  }, []);

  useEffect(() => {
    if (submitForm) {
      console.error(errors);
      const noErrors = !Object.values(errors).some(
        (error) => error && error !== ""
      );
      if (noErrors) {
        fn();
      }
      saveSubmitForm(false);
    }
  }, [errors, fn, submitForm]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    if (
      event.target.localName === "input" &&
      event.target.type === "checkbox"
    ) {
      const input = event.target as HTMLInputElement;
      saveStateValues({
        ...stateValues,
        [input.name]: input.checked,
      });
    }
    saveStateValues({
      ...stateValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const errorsValidation = validate(stateValues);
    saveErrors(errorsValidation);
    saveSubmitForm(true);
  };

  const handleBlur = (): void => {
    const errorsValidation = validate(stateValues);
    saveErrors(errorsValidation);
  };
  const handleOnFocus = (field: string): void => {
    saveErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };
  return {
    stateValues,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    handleOnFocus,
    saveStateValues,
  };
};

export default useValidation;
