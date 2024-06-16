export const mock = [
  {
    title: 'Titulo 1',
    uri: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
  },
  {
    title: 'Titulo 2',
    uri: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
  },
  {
    title: 'Titulo 3',
    uri: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
  },
];

export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours}h ${minutes}m ${remainingSeconds}s`;
};