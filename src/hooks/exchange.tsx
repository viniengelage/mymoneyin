import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import api from '../services/api';

interface IRateProps {
  [code: string]: number;
}

interface IContextProps {
  getRates(coin: string): Promise<IRateProps>;
  getConvertRate(from: string, to: string): Promise<number>;
}

interface IWrapperContextProps {
  children: JSX.Element | JSX.Element[];
}

const Exchanges = createContext<IContextProps>({} as IContextProps);

function ExchangesProvider({ children }: IWrapperContextProps) {
  const coinsSymbol = 'BRL,USD,EUR,ARS,GBP,CAD,PYG,BTC,ETH';

  const handleGetRatesFromBaseCoin = useCallback(
    async (coin: string): Promise<IRateProps> => {
      const {
        data: { rates },
      } = await api.get(`/latest?base=${coin}&symbols=${coinsSymbol}`);

      return rates as IRateProps;
    },
    [coinsSymbol],
  );

  const handleGetConvertRate = useCallback(
    async (from: string, to: string): Promise<number> => {
      const {
        data: {
          info: { rate },
        },
      } = await api.get(`/convert?from=${from}&to=${to}`);

      return rate as number;
    },
    [],
  );

  const providerValue = useMemo<IContextProps>(
    () => ({
      getRates: handleGetRatesFromBaseCoin,
      getConvertRate: handleGetConvertRate,
    }),
    [handleGetRatesFromBaseCoin, handleGetConvertRate],
  );

  return (
    <Exchanges.Provider value={providerValue}>{children}</Exchanges.Provider>
  );
}

function useExchanges() {
  const context = useContext(Exchanges);

  if (!context) {
    throw new Error('useExchanges must be used within a ExchangesProvider');
  }

  return context;
}

export { ExchangesProvider, useExchanges };
