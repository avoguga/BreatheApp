export interface Comment {
  id: string;
  username: string;
  text: string;
  color?: string;
}

export interface Post {
  id: string;
  username: string;
  date: string;
  title: string;
  text: string;
  comments: Comment[];
  mapUrl: string;
  address: string;
}
