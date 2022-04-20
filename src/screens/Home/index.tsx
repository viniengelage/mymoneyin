import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  Container,
  Title,
  StepContainer,
  StepNumber,
  StepText,
  Subtitle,
} from './styles';

import Select, { IOptionsProps } from '../../components/Select';
import Input from '../../components/Input';
import coins from '../../ultis/coins';
import { useExchanges } from '../../hooks/exchange';

interface CurrencyProps {
  name: string;
  code: string;
}

export function Home() {
  const { colors } = useTheme();
  const { getRates, getConvertRate } = useExchanges();

  const [fromCurrency, setFromCurrency] = useState<CurrencyProps>({
    name: 'Dinheiro',
    code: 'IDK',
  });
  const [toCurrency, setToCurrency] = useState<CurrencyProps>(
    {} as CurrencyProps,
  );
  const [rate, setRate] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [convertedValue, setConvertedValue] = useState<string>('');

  const [toCurrencyOptions, setToCurrencyOptions] = useState<IOptionsProps[]>(
    [],
  );

  const fromCurrencyOptions = useMemo(() => {
    const options: IOptionsProps[] = [];

    coins.map(coin =>
      options.push({
        id: coin.code,
        label: coin.description,
        value: coin.code,
        thumbnail: coin.code,
      }),
    );

    return options;
  }, []);

  const formatCurrency = useCallback((code: string, value: number) => {
    const { format } = new Intl.NumberFormat([], {
      style: 'currency',
      currency: code,
    });

    return format(value);
  }, []);

  const handleOnSelectBaseCoin = useCallback(
    async fromCurrencyData => {
      const findedCurrency = coins.find(coin => coin.code === fromCurrencyData);

      if (findedCurrency) {
        setFromCurrency({
          name: findedCurrency?.description,
          code: findedCurrency?.code,
        });
      }

      setToCurrencyOptions([]);

      const rates = await getRates(fromCurrencyData);

      const options: IOptionsProps[] = [];

      coins.map(coin =>
        options.push({
          id: coin.code,
          value: coin.code,
          label: coin.description,
          thumbnail: coin.code,
          desciption: formatCurrency(fromCurrencyData, rates[coin.code]),
        }),
      );

      setToCurrencyOptions(options);
    },
    [getRates, formatCurrency],
  );

  const handleOnSelectConvertedCurrency = useCallback(
    async toCurrencyData => {
      const findedCurrency = coins.find(coin => coin.code === toCurrencyData);

      if (findedCurrency) {
        setToCurrency({
          name: findedCurrency?.description,
          code: findedCurrency?.code,
        });
      }

      const convertRate = await getConvertRate(
        fromCurrency.code,
        toCurrencyData,
      );

      setRate(convertRate);
    },
    [fromCurrency, getConvertRate],
  );

  const handleConvertValue = useCallback(
    (value: string) => {
      const formatedValue = value
        .replace(/\D/g, '')
        .replace(/(\d)(\d{2})$/, '$1.$2');

      const floatValue = parseFloat(formatedValue);

      const parsedValue = formatCurrency(toCurrency.code, floatValue * rate);

      setInputValue(formatedValue);
      setConvertedValue(parsedValue);
    },
    [rate, formatCurrency, toCurrency],
  );

  return (
    <Container>
      <Title>
        Meu <Title style={{ color: colors.primary }}>{fromCurrency.name}</Title>{' '}
        Em
      </Title>
      {Object.keys(toCurrency).length > 0 && (
        <Subtitle>
          <Subtitle style={{ color: colors.primary }}>
            {toCurrency.name}
          </Subtitle>{' '}
          é{' '}
          <Subtitle style={{ color: colors.primary }}>
            {convertedValue}
          </Subtitle>
        </Subtitle>
      )}

      <StepContainer>
        <StepNumber>1º</StepNumber>
        <StepText>Escolha a moeda para conversão</StepText>
      </StepContainer>

      <Select options={fromCurrencyOptions} onChange={handleOnSelectBaseCoin} />

      {toCurrencyOptions.length > 0 && (
        <>
          <StepContainer style={{ marginTop: RFValue(16) }}>
            <StepNumber>2º</StepNumber>
            <StepText>Escolha a moeda que vai ser convertida</StepText>
          </StepContainer>

          <Select
            options={toCurrencyOptions}
            onChange={handleOnSelectConvertedCurrency}
          />
        </>
      )}

      {rate !== 0 && (
        <>
          <StepContainer style={{ marginTop: RFValue(16) }}>
            <StepNumber>3º</StepNumber>
            <StepText>Digite o valor</StepText>
          </StepContainer>

          <Input
            icon="pricetag-outline"
            placeholder="Valor"
            keyboardType="number-pad"
            onChangeText={handleConvertValue}
            value={inputValue}
          />
        </>
      )}
    </Container>
  );
}
