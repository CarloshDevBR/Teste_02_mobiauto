'use client';

import { ThemeProvider } from '@mui/material';

import { QueryClientProvider } from '@tanstack/react-query';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { queryClient } from '@/services/queryClient';

import { customTheme } from '@/theme';

import { ProvidersContext } from '@/context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />

        <ProvidersContext>{children}</ProvidersContext>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
