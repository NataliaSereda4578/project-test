export const Text = {
  components: {
    Text: {
      baseStyle: {
        color: 'white',
      },
      variants: {
        link: {
          cursor: 'pointer',
          transition: 'all .5 linear',
          '&:hover': { transform: 'translateY(-2px)', color: 'yellow' },
        },
        lead: {
          fontSize: 'xl',
        },
        'body-large': {
          fontSize: 'lg',
          lineHeight: 'short',
        },
        body: {
          fontSize: 'md',
        },
        'body-bold': {
          fontSize: 'md',
          fontWeight: 'bold',
        },
        button: {
          fontSize: 'md',
          fontWeight: 'bold',
        },
        'subtitle-bold': {
          fontSize: 'sm',
          lineHeight: 'normal',
          fontWeight: 'bold',
        },
        subtitle: {
          fontSize: 'sm',
          lineHeight: 'normal',
        },

        'body-short': {
          fontSize: 'md',
          lineHeight: 'short',
        },
        'label-bold': {
          fontSize: 'sm',
          fontWeight: 'bold',
          lineHeight: 'tiny',
          letterSpacing: 'wide',
          textTransform: 'uppercase',
          color: 'whiteAlpha.500',
        },
        label: {
          fontSize: 'sm',
          lineHeight: 'tiny',
          letterSpacing: 'wide',
          textTransform: 'uppercase',
          color: 'whiteAlpha.500',
        },
        small: {
          fontSize: 'xs',
          fontWeight: 'normal',
          lineHeight: 'tiny',
          letterSpacing: 'wide',
          color: 'whiteAlpha.500',
        },
        'small-bold': {
          fontSize: 'xs',
          fontWeight: 'bold',
          lineHeight: 'tiny',
          letterSpacing: 'wide',
          color: 'whiteAlpha.500',
        },
        title: {
          fontWeight: 700,
          fontSize: '48px',
        },
        'subtitle-main': {
          fontSize: '28px',
          fontWeight: 'bold',
        },
        'big-bold': {
          fontSize: '24px',
          fontWeight: 'bold',
        },
      },
    },
  },
};
