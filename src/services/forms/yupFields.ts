import { array, object, number, string, mixed, boolean, date } from 'yup';
import { regexps } from '../../contsants/regExps';
import { errorsMessages } from './errorsMessages';

export const fields = {
  email: string()
    .typeError(errorsMessages.type)
    .email(errorsMessages.email)
    // .matches(regexps.email, errorsMessages.name)
    .required(errorsMessages.required),
  password: string()
    .typeError(errorsMessages.type)
    .required(errorsMessages.required),

  userName: string()
    .typeError(errorsMessages.name)
    // .matches(regexps.userName, errorsMessages.name)
    .min(
      2,
      errorsMessages.minCharacters(2),
    )
    .max(
      20,
      errorsMessages.maxCharacters(20),
    )
    .required(errorsMessages.required),

  userSecondName: string()
    .typeError(errorsMessages.secondName)
    .min(
      2,
      errorsMessages.minCharacters(2),
    )
    .max(
      20,
      errorsMessages.maxCharacters(20),
    )
    .required(errorsMessages.required)
    .trim(errorsMessages.email),

  userLastName: string()
    .typeError(errorsMessages.lastName)
    .min(
      2,
      errorsMessages.minCharacters(2),
    )
    .max(
      20,
      errorsMessages.maxCharacters(20),
    )
    .required(errorsMessages.required)
    .trim(errorsMessages.email),

  city: string()
    .required(errorsMessages.required),
  school: string()
    .required(errorsMessages.required),
  class: string()
    .required(errorsMessages.required),
  teacher: string()
    .required(errorsMessages.required),
  privacy: boolean()
    .required(errorsMessages.required)
    .oneOf([true], errorsMessages.required),
};