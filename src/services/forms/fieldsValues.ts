const minDate = new Date();
minDate.setDate(minDate.getDate() + 1);

export const fieldsValues = Object.freeze({
  minDate,

  website: {
    maxValue: 5,
  },

});
