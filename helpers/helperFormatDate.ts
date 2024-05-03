export const formatDate = (dateString: Date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `Updated ${month} ${year}`;
};
