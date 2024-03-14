import { HTMLAttributes } from 'react';

import { StyledParagraph } from './styles';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

export const Paragraph = ({ children, ...rest }: ParagraphProps) => {
  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};
