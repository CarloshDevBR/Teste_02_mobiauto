import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';

import { LoadingParagraph, NoOptionsText } from './styles';

type DropdownProps<T> = SelectProps & {
  data: T[];
  renderMenuItem: (item: T) => React.ReactNode;
  isLoading?: boolean;
};

export const Dropdown = <T,>({ data, renderMenuItem, isLoading, label, ...rest }: DropdownProps<T>) => {
  const content = () => {
    if (isLoading) return <LoadingParagraph>Carregando dados...</LoadingParagraph>;

    if (Array.isArray(data) && data.length > 0) return data.map((item) => renderMenuItem(item));

    return <NoOptionsText>Nenhuma opção</NoOptionsText>;
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        id="demo-simple-select-label"
        style={{
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        }}
      >
        {label}
      </InputLabel>

      <Select labelId="demo-simple-select-label" id="demo-simple-select" label={label} {...rest}>
        {content()}
      </Select>
    </FormControl>
  );
};
