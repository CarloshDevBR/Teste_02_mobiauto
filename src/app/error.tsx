'use client';

import { useEffect } from 'react';

import { styled } from '@mui/material';

import { colors, shadow } from '@/theme';

import { Button } from '@/components';

const StyledContainer = styled('div')({
  width: '100%',
  height: '100%',
  backgroundColor: colors.violet[50],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: shadow.md,
  border: `1px solid ${colors.gray[100]}`,
});

const StyledTitle = styled('h2')({
  color: colors.red[700],
});

const StyledButton = styled(Button)({
  fontSize: '0.75rem',
  textTransform: 'none',
});

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StyledContainer>
      <StyledContent>
        <StyledTitle>Ocorreu um erro desconhecido nesta página!</StyledTitle>

        <StyledButton variant="outlined" onClick={() => reset()}>
          Tentar novamente
        </StyledButton>
      </StyledContent>
    </StyledContainer>
  );
}
