import { RiLoginCircleFill } from 'react-icons/ri';

export const sidebarOptions = [
  {
    lable: 'Login',
    path: '/login',
    icon: RiLoginCircleFill,
    logged: false,
  },
  {
    lable: 'Create Project',
    path: '/projects/create',
    icon: RiLoginCircleFill,
    logged: true,
  },
  {
    lable: 'Projects',
    path: '/projects',
    icon: RiLoginCircleFill,
    logged: true,
  },
];
