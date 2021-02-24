import { IRole } from '../models/role';

export const ROLES: Array<IRole> = [
  {
    id: '234324werewr',
    role: 'Admin',
    description: 'this is description',
    permissions: {
      users: {
        read: true,
        create: false,
        write: false,
      },
      clients: {
        read: true,
        create: false,
        write: false,
      },
      contractors: {
        read: true,
        create: false,
        write: false,
      },
    },
  },
  {
    id: '234324wersfewr',
    role: 'super-admin',
    description: 'this is description',
    permissions: {
      users: {
        read: true,
        create: false,
        write: false,
      },
      clients: {
        read: true,
        create: false,
        write: false,
      },
      contractors: {
        read: true,
        create: false,
        write: false,
      },
    },
  },
  {
    id: '234wersfewr',
    role: 'adjuster',
    description: 'this is description',
    permissions: {
      users: {
        read: true,
        create: false,
        write: false,
      },
      clients: {
        read: true,
        create: false,
        write: false,
      },
      contractors: {
        read: true,
        create: false,
        write: false,
      },
    },
  },
  {
    id: '234wersfewr',
    role: 'carrier',
    description: 'this is description',
    permissions: {
      users: {
        read: true,
        create: false,
        write: false,
      },
      clients: {
        read: true,
        create: false,
        write: false,
      },
      contractors: {
        read: true,
        create: false,
        write: false,
      },
    },
  },
  {
    id: '234wersfewr',
    role: 'contractor',
    description: 'this is description',
    permissions: {
      users: {
        read: true,
        create: false,
        write: false,
      },
      clients: {
        read: true,
        create: false,
        write: false,
      },
      contractors: {
        read: true,
        create: false,
        write: false,
      },
    },
  },
];
