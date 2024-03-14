import { colors } from '@/theme';

import { Paper as Pp, styled } from '@mui/material';

const LoadingContainer = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.teal[100],
});

const Container = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.teal[100],
});

const Section = styled('section')({
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

const Paper = styled(Pp)({
  padding: '8px 18px',
  backgroundColor: colors.esmerald[600],
  borderRadius: '20px',
});

const Text = styled('p')({
  color: colors.gray[800],
});

const Subtitle = styled('p')({
  color: colors.gray[700],
  fontSize: '0.75rem',
});

export const DetailsPage = { LoadingContainer, Container, Section, Paper, Text, Subtitle };
