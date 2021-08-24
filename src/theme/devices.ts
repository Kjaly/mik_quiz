export const sizesNames = {
  mobileS: 'mobileS',
  mobileM: 'mobileM',
  mobileL: 'mobileL',
  mobileXL: 'mobileXL',
  tablet: 'tablet',
  tabletL: 'tabletL',
  laptop: 'laptop',
  desktop: 'desktop',
  laptopL: 'laptopL',
  desktopM: 'desktopM',
  desktopL: 'desktopL',
};

export const size = {
  [sizesNames.mobileS]: 320,
  [sizesNames.mobileM]: 375,
  [sizesNames.mobileL]: 425,
  [sizesNames.mobileXL]: 580,
  [sizesNames.tablet]: 768,
  [sizesNames.tabletL]: 920,
  [sizesNames.laptop]: 1024,
  [sizesNames.desktop]: 1356,
  [sizesNames.laptopL]: 1440,
  [sizesNames.desktopM]: 1920,
  [sizesNames.desktopL]: 2560,
};

export const device = {
  mobileS: `@media  (min-width: ${size.mobileS}px)`,
  mobileM: `@media  (min-width: ${size.mobileM}px)`,
  mobileL: `@media  (min-width: ${size.mobileL}px)`,
  mobileXL: `@media  (min-width: ${size.mobileXL}px)`,
  tablet: `@media  (min-width: ${size.tablet}px)`,
  tabletL: `@media  (min-width: ${size.tabletL}px)`,
  laptop: `@media  (min-width: ${size.laptop}px)`,
  desktop: `@media  (min-width: ${size.desktop}px)`,
  laptopL: `@media  (min-width: ${size.laptopL}px)`,
  desktopM: `@media  (min-width: ${size.desktopM}px)`,
  desktopL: `@media  (min-width: ${size.desktopL}px)`,
};
