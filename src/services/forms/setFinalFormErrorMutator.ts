import { dot } from '../../utils/dotObject';
import { scrollToErrorField } from './scrollToErrorField';

export const setError = ([errors]: any[], state: any): any => {
  const dotErrors = dot.dot(errors);

  Object.keys(dotErrors).forEach((key) => {
    const name = key;
    const data = { error: dotErrors[key] };

    const field = state.fields[name];
    if (field) {
      field.visited = false;
      field.touched = false;
      field.data = { ...field.data, ...data };
    }
  });

  scrollToErrorField(errors);
};
