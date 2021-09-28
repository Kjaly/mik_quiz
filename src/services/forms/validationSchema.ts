import { AnyObject } from 'yup/lib/object';
import { formsNames } from './formsNames';

import { fields } from './yupFields';


interface IShemaValues {
  formName: string;
}

export const getValidationSchema = ({formName}: IShemaValues): AnyObject | undefined => {
  const schema = {
    [formsNames.registration]: {
      email: fields.email,
      city: fields.city,
      password: fields.password,
      password_confirmation: fields.password,
    },
    [formsNames.auth]: {
      email: fields.email,
      password: fields.password,
    },
    [formsNames.resetPassword]: {
      password: fields.password,
      password_confirmation: fields.password,
    },
    [formsNames.profileUpdate]: {
      first_name: fields.userName,
      last_name: fields.userLastName,
      city: fields.city,
      birthday: fields.birthday,
      school: fields.school,
      school_class: fields.class,
      school_teacher_history: fields.teacher,
      parental_agreement_id: fields.fileId,
      parental_agreement: fields.file,
    },

  };

  if (formName && schema[formName]) {
    return schema[formName];
  }
};
