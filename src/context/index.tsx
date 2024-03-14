import { ProviderFipeContext } from './fipe';

export const ProvidersContext = ({ children }: { children: React.ReactNode }) => {
  return <ProviderFipeContext>{children}</ProviderFipeContext>;
};
