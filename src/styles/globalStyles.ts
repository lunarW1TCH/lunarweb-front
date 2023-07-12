/** @jsxImportSource @emotion/react */
import createStyles from './createStyles';

export interface ITheme {
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
}

export const THEME: ITheme = {
  primary100: '#e5d1c5',
  primary200: '#d9baa7',
  primary300: '#cca38a',
  primary400: '#c5987c',
  primary500: '#bf8c6d',
  primary600: '#ac7e62',
  primary700: '#997057',
  primary800: '#86624c',
  primary900: '#604637',
};

const breakpoints = [576, 768, 992, 1200];

export const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

const globalStyles = createStyles({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    display: 'block',
    fontFamily: 'Ysabeau Infant, sans-serif',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("/img/freja.jpeg")',
    height: '100%',
  },
  '*::-webkit-scrollbar': {
    width: 8,
  },
  '*::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: THEME.primary900,
    borderRadius: 4,
  },

  'html, #root': {
    height: '100%',
  },
});

export default globalStyles;
