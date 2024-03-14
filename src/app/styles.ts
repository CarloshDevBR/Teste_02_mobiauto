import { colors, shadow } from '@/theme';

import { styled } from '@mui/material';

const Main = styled('main')({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.violet[50],
});

const Section = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  minWidth: '250px',
  maxWidth: '500px',
  width: '100%',
});

const ContainerText = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '2.5rem 3.5rem',
  backgroundColor: 'white',
  borderRadius: '4px',
  boxShadow: shadow.md,
});

export const HomePage = {
  Main,
  Section,
  ContainerText,
  Form,
};
