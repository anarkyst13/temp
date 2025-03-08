// .storybook/preview.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme'; // Укажите правильный путь к файлу с темой
import { GlobalStyle } from '../src/styles/globalStyle'; // Укажите правильный путь к файлу с глобальными стилями

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
