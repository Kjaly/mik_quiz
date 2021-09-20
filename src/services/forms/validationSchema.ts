import { AnyObject } from 'yup/lib/object';
import { formsNames } from './formsNames';

import { fields } from './yupFields';


interface IShemaValues {
  formName: string;
}

export const getValidationSchema = ({formName}: IShemaValues): AnyObject | undefined => {
  const schema = {
    [formsNames.registration]: {
      secondName: fields.userName,
      firstName: fields.userSecondName,
      lastName: fields.userLastName,
      city: fields.city,
      school: fields.school,
      class: fields.class,
      teacher: fields.teacher,
      email: fields.email,
      password: fields.password,
      repeatPassword: fields.password,
      privacy: fields.privacy,
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
