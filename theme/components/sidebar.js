const Sidebar = {
  baseStyle: {
    p: '22px',
    minWidth: '200px',
    display: 'flex',
    flexDir: 'column',
    borderRight: '1px solid blue',
    bg: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)',
    '& > *': {
      ':not(&:first-of-type)': {
        marginTop: 16,
      },
    },
  },
};

export const SidebarComponent = {
  components: {
    Sidebar,
  },
};
