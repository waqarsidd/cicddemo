export interface IRole {
  id: string;
  role: string;
  description: string;
  permissions: {
    [key: string]: {
      write: boolean;
      read: boolean;
      create: boolean;
    };
  };
}
