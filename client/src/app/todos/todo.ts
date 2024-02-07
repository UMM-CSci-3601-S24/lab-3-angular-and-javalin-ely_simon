export interface Todo {
  _id: string;
  status: boolean;
  owner: string;
  bodyText: string;
  category: string;
  avatar?: string;
}

export type UserRole = 'admin' | 'editor' | 'viewer';
