import { ThemeOptions, createTheme } from '@mui/material';

export const colors = {
  violet: {
    50: '#f5f3ff',
    800: '#5b21b6',
  },
  purple: {
    700: '#6b46c1',
  },
  gray: {
    100: '#E5E7EB',
    700: '#6B7280',
    800: '#4B5563',
  },
  teal: {
    100: '#D1FAE5',
  },
  esmerald: {
    600: '#10B981',
  },
  red: {
    700: '#DC2626',
  },
};

export const shadow = {
  sm: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',
  md: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

export const customTheme: ThemeOptions = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            ':enabled': {
              backgroundColor: colors.violet[800],
            },
            '&:hover': {
              backgroundColor: colors.purple[700],
            },
            boxShadow: shadow.sm,
          },
        },
      ],
    },
  },
});
