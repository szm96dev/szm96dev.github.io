// Smooth scrolling that accounts for the fixed header height
export const scrollToSection = (sectionId, options = {}) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const header = document.querySelector('header');
  const headerHeight = header?.getBoundingClientRect().height || 80;
  const additionalOffset = options.offset || 0;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - additionalOffset;

  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
