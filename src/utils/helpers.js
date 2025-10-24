// Helper functions I use throughout the app



// Gets the current year for copyright
export const getCurrentYear = () => {
  return new Date().getFullYear();
};

// Makes dates look nice
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};


// Decides if a link should open in a new tab
export const shouldOpenInNewTab = (url) => {
  return url.startsWith('http') && !url.startsWith('mailto:') && !url.startsWith('tel:');
};

