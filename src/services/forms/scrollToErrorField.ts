import { dot } from '../../utils/dotObject';


export const scrollToErrorField = (errors: any): void => {
  console.warn(errors);

  if (!errors) return;

  setTimeout(() => {
    const classList: Array<string> = Object.keys(dot.dot(errors)).map(
      (className) => `.field-error[data-name="position-${className}"]`,
    );

    const nodeList = document.querySelectorAll(classList as any);

    if (nodeList.length) {
      const domElement = nodeList[0];

      if (domElement) {

        domElement.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
      }
    }
  }, 300);
};
