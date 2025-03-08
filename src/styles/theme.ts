// src/styles/theme.ts
export const theme = {
    colors: {
        // Основные цвета
        colorMainOnPrimary: "#ffffff", // Цвет текста на основном фоне
        colorMainPrimary: "#ff6633", // Основной цвет
        colorMainPrimaryMuted: "#fcd5ba", // Приглушенный основной цвет
        colorMainOnSecondary: "#ffffff", // Цвет текста на вторичном фоне
        colorMainSecondary: "#70c05b", // Вторичный цвет
        colorMainSecondaryMuted: "#e5ffde", // Приглушенный вторичный цвет
        colorMainOnSurface: "#414141", // Цвет текста на поверхности
        colorMainSurface: "#ffffff", // Цвет поверхности
        colorMainOnBackground: "#291e0f", // Цвет текста на фоне страницы
        colorMainBackground: "#f4f4f2", // Основной фон
        colorMainBgPage: "#fbf8ec", // Фон страницы

        // Градации серого
        colorGrayscaleLightest: "#f3f2f1", // Самый светлый серый
        colorGrayscaleLight: "#bfbfbf", // Светлый серый
        colorGrayscaleHard: "#8f8f8f", // Средний серый
        colorGrayscaleHardest: "#606060", // Темный серый

        // Цвета палитры состояния
        colorPaletteOnError: "#f2f2f2", // Цвет текста на ошибке
        colorPaletteError: "#d80000", // Цвет ошибки
        colorPaletteErrorMuted: "#ffc7c7", // Приглушенный цвет ошибки
        colorPaletteOnSuccess: "#f2f2f2", // Цвет текста на успехе
        colorPaletteSuccess: "#008c49", // Цвет успеха
        colorPaletteInfo: "#1cb9fc", // Цвет информации
        colorPaletteWarning: "#fca21c", // Цвет предупреждения
    },
    breakpoints: {
        mobile: "360px",
        tablet: "780px",
        desktop: "1400px",
    },
    // Добавляем категории для масштабируемости
};

export type Theme = typeof theme;
