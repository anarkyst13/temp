import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* rubik-regular - cyrillic_latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  src: url('/src/assets/fonts/rubik-v28-cyrillic_latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

/* rubik-700 - cyrillic_latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  src: url('/src/assets/fonts/rubik-v28-cyrillic_latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* rubik-regular - cyrillic_latin */
/* roboto-regular - cyrillic_latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('/src/assets/fonts/roboto-v47-cyrillic_latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}

/* roboto-700 - cyrillic_latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('/src/assets/fonts/roboto-v47-cyrillic_latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}


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
    font-family: 'Rubik', sans-serif;
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
