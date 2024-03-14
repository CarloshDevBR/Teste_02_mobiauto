import { createContext, useContext, useState } from 'react';

import { FormState } from '@/hook/useFormFipe';

type FipeContext = {
  fipe: FormState;
  setFipeData: (value: FormState) => void;
};

const defaultValue = { brand: '', model: '', year: '' };

const fipeContext = createContext<FipeContext>({
  fipe: defaultValue,
  setFipeData: () => {},
});

export const ProviderFipeContext = ({ children }: { children: React.ReactNode }) => {
  const [fipe, setFipe] = useState<FormState>(defaultValue);

  const setFipeData = (value: FormState) => {
    setFipe(value);
  };

  return <fipeContext.Provider value={{ fipe, setFipeData }}>{children}</fipeContext.Provider>;
};

export const useFipe = () => {
  return useContext(fipeContext);
};
