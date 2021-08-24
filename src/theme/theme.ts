import { colorSchema } from './colorSchema';
import { sizesNames } from './devices';
import { propertiesSchema } from './propertiesSchema';

export const theme = {
  color: colorSchema,
  properties: propertiesSchema,

  paddings: {
    wrapper: {
      [sizesNames.mobileS]: 15,
      [sizesNames.tablet]: 30,
      [sizesNames.desktop]: 98,
      [sizesNames.desktopM]: 140,
    },
    modalWrapper: {
      [sizesNames.mobileS]: 15,
      [sizesNames.tablet]: 30,
    },
  },

  sizes: {
    h1: {
      mobile: 42,
      tablet: 32,
      desktop: 60,
      desktopM: 70,
      desktopL: 70,
    },
    h2: {
      mobile: 21,
      tablet: 20,
      desktop: 36,
      desktopM: 42,
      desktopL: 42,
    },
    h3: {
      mobile: 20,
      tablet: 20,
      desktop: 24,
      desktopM: 24,
      desktopL: 24,
    },
    h4: {
      desktopL: 18,
    },
    text1: {
      mobile: 16,
      tablet: 16,
      desktop: 24,
      desktopM: 30,
      desktopL: 30,
    },
    text: {
      desktopL: 15,
    },
    textL: {
      desktopL: 18,
    },
    textS: {
      desktopL: 14,
    },
    button: {
      desktopL: 15,
    },
  },
};
