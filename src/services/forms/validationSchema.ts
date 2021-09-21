import { AnyObject } from 'yup/lib/object';
import { formsNames } from './formsNames';

import { fields } from './yupFields';


interface IShemaValues {
  formName: string;
}

export const getValidationSchema = ({formName}: IShemaValues): AnyObject | undefined => {
  const schema = {
    [formsNames.registration]: {
      // middle_name: fields.userSecondName,
      // first_name: fields.userName,
      // last_name: fields.userLastName,
      // city: fields.city,
      // school: fields.school,
      // school_class: fields.class,
      // school_teacher_history: fields.teacher,
      email: fields.email,
      password: fields.password,
      password_confirmation: fields.password,
    },
    [formsNames.auth]: {
      email: fields.email,
      password: fields.password,
    },

  };

  if (formName && schema[formName]) {
    return schema[formName];
  }
};
