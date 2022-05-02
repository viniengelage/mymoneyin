import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  SharedValue,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components';

import {
  Container,
  Title,
  Header,
  Content,
  AnimatedTitle,
  AnimatedContent,
  ConvertedValue,
  ConvertedValueContainer,
  ConvertValueTitle,
  Author,
} from './styles';

import { useExchanges } from '../../hooks/exchange';

import coins from '../../utils/coins';
import formatCurrency from '../../utils/formatCurrency';
import parseCurrency from '../../utils/parseCurrency';

import Select, { IOptionsProps } from '../../components/Select';
import Input from '../../components/Input';
import Step from '../../components/Step';

interface CurrencyProps {
  name: string;
  code: string;
}

export function Home() {
  const { colors } = useTheme();
  const { getConvertRate } = useExchanges();

  const [fromCurrency, setFromCurrency] = useState<CurrencyProps>(
    {} as CurrencyProps,
  );
  const [toCurrency, setToCurrency] = useState<CurrencyProps>(
    {} as CurrencyProps,
  );
  const [rate, setRate] = useState<number>(0);
  const [amount, setAmount] = useState<string>('');
  const [convertedValue, setConvertedValue] = useState<number>();
  const [showAuthor, setShowAuthor] = useState<boolean>(true);

  const titlePosition = useSharedValue(-30);
  const sectionPosition = useSharedValue(90);

  const currencyOptions = useMemo(() => {
    const options: IOptionsProps[] = [];

    coins.map(coin =>
      options.push({
        id: coin.code,
        label: coin.description,
        value: coin.code,
        thumbnail: coin.image,
      }),
    );

    return options;
  }, []);

  const handleSelectFromCurrency = useCallback((value: string) => {
    const currency = coins.find(coin => coin.code === value);

    if (currency) {
      setFromCurrency({
        name: currency.description,
        code: currency.code,
      });
    }
  }, []);

  const handleSelectToCurrency = useCallback((value: string) => {
    const currency = coins.find(coin => coin.code === value);

    if (currency) {
      setToCurrency({
        name: currency.description,
        code: currency.code,
      });
    }
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      getConvertRate(fromCurrency.code, toCurrency.code).then(response =>
        setRate(response),
      );
    }
  }, [getConvertRate, fromCurrency, toCurrency]);

  useEffect(() => {
    if (rate && amount) {
      setConvertedValue(parseFloat(amount) * rate);
    }
  }, [amount, rate]);

  const opacityInterpolate = useCallback(
    ({ value }: SharedValue<number>, position: number) => {
      'worklet';

      return {
        opacity: interpolate(value, [position, 0], [0, 1], Extrapolate.CLAMP),
      };
    },
    [],
  );

  useEffect(() => {
    titlePosition.value = withTiming(
      0,
      {
        duration: 500,
      },
      () => {
        sectionPosition.value = withTiming(0, {
          duration: 800,
        });
      },
    );
  }, [titlePosition, sectionPosition]);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: interpolate(
        titlePosition.value,
        [-30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const sectionStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: sectionPosition.value }],
    };
  });

  const selectFromCurrencyStyle = useAnimatedStyle(() =>
    opacityInterpolate(sectionPosition, 30),
  );

  const inputAmountStyle = useAnimatedStyle(() =>
    opacityInterpolate(sectionPosition, 60),
  );

  const inputStyle3 = useAnimatedStyle(() =>
    opacityInterpolate(sectionPosition, 90),
  );

  return (
    <Container behavior="padding">
      <Header>
        <AnimatedTitle style={titleStyle}>
          My <Title style={{ color: colors.primary }}>Money</Title> In
        </AnimatedTitle>
      </Header>

      <Content>
        {convertedValue && (
          <>
            <ConvertValueTitle>Valor de conversão</ConvertValueTitle>
            <ConvertedValueContainer>
              <ConvertedValue style={{ color: colors.primary }}>
                {formatCurrency(toCurrency.code, convertedValue)}
              </ConvertedValue>
            </ConvertedValueContainer>
          </>
        )}

        <AnimatedContent style={sectionStyle}>
          <Animated.View style={selectFromCurrencyStyle}>
            <Step number={1} text="Converter de" />
            <Select
              options={currencyOptions}
              onChange={handleSelectFromCurrency}
            />
          </Animated.View>

          <Animated.View style={inputAmountStyle}>
            <Step number={2} text="Valor para conversão" />
            <Input
              icon="pricetag-outline"
              placeholder="Valor"
              keyboardType="number-pad"
              onChangeText={value => setAmount(parseCurrency(value))}
              value={amount.toString()}
              onFocus={() => setShowAuthor(false)}
              onBlur={() => setShowAuthor(true)}
            />
          </Animated.View>

          <Animated.View style={inputStyle3}>
            <Step number={3} text="Converter para" />
            <Select
              options={currencyOptions}
              onChange={handleSelectToCurrency}
              description={
                toCurrency.code && formatCurrency(toCurrency.code, rate)
              }
            />
          </Animated.View>
        </AnimatedContent>
      </Content>
      {showAuthor && <Author>Crafted by Vinicios Engelage</Author>}
    </Container>
  );
}
