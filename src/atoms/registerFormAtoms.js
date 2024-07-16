import { atom } from "jotai";

export const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
  message: "",
};

export const registerFormValuesAtom = atom(initialFormValues);

export const registerFormErrorValuesAtom = atom({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  agreeTerms: "",
  message: "",
});
