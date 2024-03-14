import { AutocompleteProps } from '@mui/material';

import { StyledAutocomplete } from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AutocompletePropsType = AutocompleteProps<any, boolean, boolean, boolean>;

export const Autocomplete = ({ ...rest }: AutocompletePropsType) => {
  return <StyledAutocomplete {...rest} id="combo-box-demo" noOptionsText="Nenhuma opção" />;
};
