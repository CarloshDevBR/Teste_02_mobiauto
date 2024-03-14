import { ButtonProps } from '@mui/material';

import { StyledButton } from './styles';

type BtnProps = ButtonProps & {
  children: React.ReactNode;
};

export const Button = ({ children, ...rest }: BtnProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
