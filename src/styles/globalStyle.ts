import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* ================== */
  /* Базовый сброс стилей */
  /* ================== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    /* 1rem = 10px (для упрощения расчетов) */
    font-size: 62.5%;
    scroll-behavior: smooth;
    text-size-adjust: 100%;
    scrollbar-gutter: stable;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
  }


  /* ================== */
  /* Элементы формы */
  /* ================== */
  button,
  input,
  select,
  textarea {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    appearance: none;
  }

  textarea {
    resize: vertical;
  }

  /* ================== */
  /* Доступность */
  /* ================== */
  [hidden] {
    display: none !important;
  }

  [aria-hidden="false"] {
    display: initial;
  }

  [aria-hidden="true"] {
    display: none;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* ================== */
  /* Изображения и медиа */
  /* ================== */
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    font-style: italic; /* Fallback для alt текста */
  }

  svg {
    fill: currentColor;
    vertical-align: middle;
  }

  picture {
    display: contents;
  }

  /* ================== */
  /* Таблицы */
  /* ================== */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* ================== */
  /* Текст и типография */
  /* ================== */
  b,
  strong {
    font-weight: bold;

  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  /* ================== */
  /* Вспомогательные классы */
  /* ================== */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }


  [data-no-hyphens] {
    hyphens: none;
  }

  /* ================== */
  /* Пользовательский выбор */
  /* ================== */
  ::selection {
    background: rgba(255, 255, 255, 0.1);
    color: inherit;
  }
`;
