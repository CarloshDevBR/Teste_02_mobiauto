'use client';

import { useEffect } from 'react';

import { MenuItem, SelectChangeEvent, TextField } from '@mui/material';

import { Autocomplete, Button, Dropdown, Paragraph, RenderIf } from '@/components';

import { useGetAllSequentialDataFipe } from '@/hook/useGetAllSequentialDataFipe';

import { ACTIONS, useFormFipe } from '@/hook/useFormFipe';

import { Fipe } from '@/types';

import { useRouter } from 'next/navigation';

import { HomePage } from './styles';

import { useFipe } from '@/context/fipe';

export default function HomeForm() {
  const { state, completed, dispatch } = useFormFipe();

  const navigate = useRouter();

  const { setFipeData } = useFipe();

  const {
    dataBrands,
    isLoadingBrands,
    dataModels,
    isLoadingModels,
    dataYears,
    isLoadingYears,
    getBrands,
    getModels,
    getYears,
  } = useGetAllSequentialDataFipe();

  const handleSelectBrand = (_: React.SyntheticEvent<Element, Event>, value: Fipe | null) => {
    dispatch({ type: ACTIONS.SET_BRAND, payload: value?.codigo || '' });

    if (state.model || state.year) {
      dispatch({ type: ACTIONS.SET_MODEL, payload: '' });

      dispatch({ type: ACTIONS.SET_YEAR, payload: '' });
    }

    if (value) return getModels(value.codigo);
  };

  const handleSelectModels = (_: React.SyntheticEvent<Element, Event>, value: Fipe | null) => {
    dispatch({ type: ACTIONS.SET_MODEL, payload: value?.codigo || '' });

    if (state.year) {
      dispatch({ type: ACTIONS.SET_YEAR, payload: '' });
    }

    if (value) return getYears(state.brand, value.codigo);
  };

  const handleSelectYears = (value: SelectChangeEvent<unknown>) => {
    dispatch({ type: ACTIONS.SET_YEAR, payload: value.target.value as string });
  };

  const handleNavigationDetails = () => {
    setFipeData(state);

    navigate.push('/details');
  };

  useEffect(() => {
    if (!dataBrands) {
      getBrands();
    }
  }, []);

  return (
    <HomePage.Main>
      <HomePage.Section>
        <HomePage.ContainerText>
          <Paragraph
            style={{
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              textAlign: 'center',
              marginBottom: '0.5rem',
            }}
          >
            Tabela Fipe
          </Paragraph>

          <Paragraph
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              textAlign: 'center',
              marginBottom: '0.5rem',
            }}
          >
            Consulte o valor de um veículo de forma gratuita
          </Paragraph>
        </HomePage.ContainerText>

        <HomePage.Form>
          <Autocomplete
            options={dataBrands || []}
            getOptionLabel={(item) => item.nome}
            onChange={handleSelectBrand}
            renderInput={(params) => <TextField {...params} label="Marca" />}
            loading={isLoadingBrands}
            disabled={isLoadingBrands}
          />

          <Autocomplete
            options={dataModels || []}
            getOptionLabel={(item) => item.nome}
            onChange={handleSelectModels}
            renderInput={(params) => <TextField {...params} label="Modelo" />}
            loading={isLoadingModels}
            disabled={!state.brand}
          />

          <RenderIf conditional={Boolean(state.brand && state.model)}>
            <Dropdown
              label="Ano"
              data={dataYears || []}
              renderMenuItem={(item) => (
                <MenuItem key={item.codigo} value={item.codigo}>
                  {item.nome}
                </MenuItem>
              )}
              onChange={handleSelectYears}
              disabled={!state.model}
              variant="outlined"
              isLoading={isLoadingYears}
            />
          </RenderIf>

          <Button
            onClick={handleNavigationDetails}
            disabled={!completed}
            variant="contained"
            sx={{
              mt: 1,
            }}
          >
            Consultar preço
          </Button>
        </HomePage.Form>
      </HomePage.Section>
    </HomePage.Main>
  );
}
