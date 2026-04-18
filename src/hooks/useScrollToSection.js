import { useCallback } from 'react';
import { scrollToSection as scrollToSectionWithOffset } from '../utils/scrollUtils';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    scrollToSectionWithOffset(sectionId);
  }, []);

  return scrollToSection;
};
