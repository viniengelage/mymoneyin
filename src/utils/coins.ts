import {
  brlIcon,
  usdIcon,
  arsIcon,
  gbpIcon,
  cadIcon,
  pygIcon,
} from '../assets/images/flags';

const coins: ICoinProps[] = [
  {
    code: 'BRL',
    description: 'Real',
    image: brlIcon,
  },
  {
    code: 'USD',
    description: 'Dólar americano',
    image: usdIcon,
  },
  {
    code: 'ARS',
    description: 'Peso argentino',
    image: arsIcon,
  },
  {
    code: 'GBP',
    description: 'Libra esterlina',
    image: gbpIcon,
  },
  {
    code: 'CAD',
    description: 'Dólar canadense',
    image: cadIcon,
  },
  {
    code: 'PYG',
    description: 'Guarani',
    image: pygIcon,
  },
  // { code: 'BTC', description: 'Bitcoin' },
  // { code: 'ETH', description: 'Etherium' },
];

export default coins;
