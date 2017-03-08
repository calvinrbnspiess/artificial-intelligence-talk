
export const getCurrentSlide = () => parseInt(window.location.hash.match(/\d(?=\?)/)[0], 10);

export const redirectToNextSlide = () => {
  window.location.hash = getCurrentSlide() + 1;
};
