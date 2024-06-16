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

export const mockRecomended = [
  {
    title: 'Meditação',
    uri: 'https://cdn.prod.website-files.com/5e261bc81db8f19fa664899d/6490cb674e90ccac1669cfdd_out-0.png',
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
