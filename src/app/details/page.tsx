'use client';

import { Loading } from '@/components';

import { useFipe } from '@/context/fipe';

import { FETCH } from '@/services/fetch';

import { DetailsFipe } from '@/types';

import { useQuery } from '@tanstack/react-query';

import { DetailsPage } from './styles';

export default function Details() {
  const { fipe } = useFipe();

  const { brand, model, year } = fipe;

  const { data, isPending } = useQuery<DetailsFipe>({
    queryKey: [brand, model, year],
    queryFn: () =>
      FETCH({
        url: `marcas/${brand}/modelos/${model}/anos/${year}`,
        method: 'GET',
      }),
  });

  if (isPending)
    return (
      <DetailsPage.LoadingContainer>
        <Loading color="success" size={50} />
      </DetailsPage.LoadingContainer>
    );

  return (
    <DetailsPage.Container>
      <DetailsPage.Section>
        <DetailsPage.Text style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          Tabela Fipe: Preço {data?.Marca} {data?.Modelo} {data?.AnoModelo}
        </DetailsPage.Text>

        <DetailsPage.Paper>
          <DetailsPage.Text
            style={{
              fontSize: '1rem',
              color: 'white',
            }}
          >
            {data?.Valor}
          </DetailsPage.Text>
        </DetailsPage.Paper>

        <DetailsPage.Subtitle>Este é o preço de compra do veículo</DetailsPage.Subtitle>
      </DetailsPage.Section>
    </DetailsPage.Container>
  );
}
