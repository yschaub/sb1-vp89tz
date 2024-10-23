export interface Author {
  name: string;
  handle: string;
  avatar: string;
}

export interface Roast {
  id: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  author: Author;
  likes: number;
}