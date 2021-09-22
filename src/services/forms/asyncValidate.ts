import { setIn } from 'final-form';
import * as yup from 'yup';

import { getValidationSchema } from './validationSchema';

interface IValidateOptions {
  formName: string;
}

export const asyncValidate = async <V = Record<string, string | null | undefined | boolean | any>>(
  values: V,
  { formName }: IValidateOptions,
  callback?: (errors: { [P in keyof V]?: string } | undefined) => void
): Promise<{ [P in keyof V]?: string } | undefined> => {
  const formSchema = getValidationSchema({ formName });

  if (!formSchema) {
    console.warn('incorrect form schema');
    return;
  }

  try {
    await yup.object(formSchema).validate(values, { abortEarly: false, context: values });
  } catch (err: any) {
    const errors = err?.inner?.reduce(
      (formError: { [P in keyof V]?: string }, innerError: any) =>
        setIn(formError, innerError.path, innerError.message),
      {}
    );

    if (errors) {
      // сбрасываем ошибки с отредактированных полей
      Object.keys(values).forEach((key) => {
        if (!errors[key]) {
          errors[key] = null;
        }
      });

      if (typeof callback === 'function') {
        callback(errors);
      }

      return errors;
    }

    console.warn('You try check and proccess unexisted field in asyncValidate');
    return;
  }
};
