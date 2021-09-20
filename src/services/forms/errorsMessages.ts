export const errorsMessages = {
  email: 'Введите Email',
  type: 'Не соотвестует',
  name: 'Введите имя',
  secondName: 'Введите фамилию',
  lastName: 'Введите отчество',
  required: 'Обязательное поле',
  minCharacters: (value: string | number): string => `Минимальная длина ${value} символов`,
  maxCharacters: (value: string | number): string => `Максимальная длина ${value} символов`,

};
